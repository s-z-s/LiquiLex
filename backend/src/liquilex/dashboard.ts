import { Context } from 'hono';
import { Env } from '../hello-world/raindrop.gen';
import { queryPostgres } from '../auth/db';

export class DashboardService {
    private env: Env;

    constructor(env: Env) {
        this.env = env;
    }

    async initDB() {
        // Projects Table
        await queryPostgres(this.env, `
            CREATE TABLE IF NOT EXISTS projects (
                id SERIAL PRIMARY KEY,
                user_id INTEGER,
                address TEXT NOT NULL,
                zone TEXT,
                details TEXT,
                suitability_score INTEGER DEFAULT 0,
                status TEXT DEFAULT 'In Feasibility',
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);

        // Tasks Table
        await queryPostgres(this.env, `
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT,
                status TEXT DEFAULT 'pending', 
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        // Migration helper for dev (in case table existed without description)
        try {
            await queryPostgres(this.env, `ALTER TABLE tasks ADD COLUMN IF NOT EXISTS description TEXT`);
        } catch (e) { /* ignore */ }

        // Alerts Table (Watchdog)
        await queryPostgres(this.env, `
            CREATE TABLE IF NOT EXISTS alerts (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                link TEXT,
                severity TEXT DEFAULT 'medium',
                date_text TEXT,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        // Migration: Ensure link column exists for existing tables
        try {
            await queryPostgres(this.env, `ALTER TABLE alerts ADD COLUMN IF NOT EXISTS link TEXT`);
        } catch (e) { /* ignore */ }

        // Seed Mock Alerts if empty (Check V2)
        const alertsCheck = await queryPostgres(this.env, 'SELECT count(*) as c FROM alerts_v2');
        if (parseInt(alertsCheck.rows[0].c) === 0) {
            await queryPostgres(this.env, `
                INSERT INTO alerts_v2 (title, link, severity, date_text) VALUES 
                ('New Food Truck Ordinance', 'https://austintexas.gov', 'high', '2 days ago'),
                ('Downtown Parking Updates', 'https://austintexas.gov', 'medium', '1 week ago')
            `);
        }

        return { message: 'Dashboard DB initialized' };
    }

    // --- Watchdog / RSS Fetcher ---
    public async refreshWatchdog() {
        // Emergency Self-Repair: Always ensure table exists before doing anything
        await queryPostgres(this.env, `
            CREATE TABLE IF NOT EXISTS alerts_v2 (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                link TEXT,
                severity TEXT DEFAULT 'medium',
                date_text TEXT,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);

        // New Cache Key to force re-fetch for V4
        const CACHE_RSS_KEY = 'rss_last_fetched_v4';
        // @ts-ignore
        const lastFetched = await this.env.mem.get(CACHE_RSS_KEY);

        // Only fetch once per hour to be polite
        if (lastFetched) return;

        console.log('📰 Fetching Fresh RSS Feed...');

        const RSS_URL = 'https://www.austinmonitor.com/feed/';
        let newAlerts: any[] = [];

        try {
            const res = await fetch(RSS_URL);
            if (!res.ok) throw new Error('RSS Fetch Failed');

            const text = await res.text();

            // XML Parse Hack
            const items = text.match(/<item>[\s\S]*?<\/item>/g) || [];

            // 1. Try Strict Filter
            for (const item of items.slice(0, 5)) {
                const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/);
                const linkMatch = item.match(/<link>(.*?)<\/link>/) || item.match(/<guid.*>(.*?)<\/guid>/);
                const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);

                if (titleMatch && titleMatch[1]) {
                    const title = titleMatch[1];
                    let link = (linkMatch && linkMatch[1]) ? linkMatch[1] : '#';
                    if (link && !link.startsWith('http')) link = '#';

                    const dateStr = dateMatch && dateMatch[1] ? dateMatch[1] : new Date().toISOString();

                    const KEYWORDS = ['zoning', 'permit', 'fee', 'ordinance', 'council', 'development', 'plan', 'code'];
                    const isRelevant = KEYWORDS.some((k: string) => title.toLowerCase().includes(k));

                    if (isRelevant) {
                        newAlerts.push({
                            title: title,
                            link: link,
                            severity: title.toLowerCase().includes('urgent') || title.toLowerCase().includes('alert') ? 'high' : 'medium',
                            date_text: new Date(dateStr).toLocaleDateString()
                        });
                    }
                }
            }

            // 2. Fallback: If no relevant news, just take top 5 general items
            if (newAlerts.length === 0) {
                console.log('No relevant keyword news found. Loading general feed.');
                for (const item of items.slice(0, 5)) {
                    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/);
                    const linkMatch = item.match(/<link>(.*?)<\/link>/) || item.match(/<guid.*>(.*?)<\/guid>/);
                    const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);

                    if (titleMatch && titleMatch[1]) {
                        const title = titleMatch[1];
                        let link = (linkMatch && linkMatch[1]) ? linkMatch[1] : '#';
                        if (link && !link.startsWith('http')) link = '#';
                        const dateStr = dateMatch && dateMatch[1] ? dateMatch[1] : new Date().toISOString();

                        newAlerts.push({
                            title: title,
                            link: link,
                            severity: 'medium', // Default for general news
                            date_text: new Date(dateStr).toLocaleDateString()
                        });
                    }
                }
            }

        } catch (e) {
            console.error('RSS Parsing failed, using Simulation', e);
            // Fallback
            newAlerts = [
                { title: 'New Zoning Overlay Proposed', link: 'https://austintexas.gov/news', severity: 'high', date_text: 'Today' },
                { title: 'Food Truck Water Regulations', link: 'https://austintexas.gov/department/mobile-food-vendors', severity: 'medium', date_text: 'Yesterday' }
            ];
        }

        if (newAlerts.length > 0) {
            await queryPostgres(this.env, 'DELETE FROM alerts_v2');
            for (const alert of newAlerts) {
                await queryPostgres(this.env,
                    `INSERT INTO alerts_v2 (title, link, severity, date_text) VALUES ($1, $2, $3, $4)`,
                    [alert.title, alert.link, alert.severity, alert.date_text]
                );
            }
            // @ts-ignore
            await this.env.mem.put(CACHE_RSS_KEY, 'true', { expirationTtl: 3600 });
        }
    }

    // --- Dashboard Summary with Cache (Valkey) ---
    async getSummary(userId: number) {
        const cacheKey = `dashboard_summary_${userId}`;
        // @ts-ignore
        const cached = await this.env.mem.get(cacheKey, 'json');
        if (cached) {
            console.log(`Serving Dashboard Summary for User ${userId} from Cache`);
            return cached;
        }

        console.log(`Calculating Dashboard Summary for User ${userId} (DB Hit)`);

        // Parallel Fetch (Projects & Tasks are critical)
        const [projectsRes, tasksRes] = await Promise.all([
            queryPostgres(this.env, 'SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC', [userId]),
            queryPostgres(this.env, 'SELECT * FROM tasks ORDER BY created_at DESC') // Global tasks for now
        ]);

        // Fetch User details safely (don't crash dashboard if users table issues)
        let businessType = '';
        try {
            const userRes = await queryPostgres(this.env, 'SELECT business_type FROM users WHERE id = $1', [userId]);
            if (userRes.rows.length > 0) {
                businessType = userRes.rows[0].business_type || '';
            }
        } catch (e) {
            console.warn('Optional User Fetch Failed (ignoring)', e);
        }

        const projects = projectsRes.rows;
        const tasks = tasksRes.rows;
        // businessType is already set above

        // Dynamic Watchdog: Check RSS (Global) & Filter
        let activeAlerts: any[] = [];
        try {
            await this.refreshWatchdog();
            const alertsRes = await queryPostgres(this.env, 'SELECT * FROM alerts_v2 ORDER BY created_at DESC LIMIT 20');
            activeAlerts = alertsRes.rows;

            // FILTER: By Business Type
            if (businessType) {
                const keywords = businessType.toLowerCase().split(' '); // e.g., "Food Truck" -> ["food", "truck"]
                // Also add generic keywords
                keywords.push('zoning', 'permit', 'ordinance');

                activeAlerts = activeAlerts.filter((a: any) => {
                    const titleLower = a.title.toLowerCase();
                    // Match if title contains any keyword
                    return keywords.some((k: string) => titleLower.includes(k));
                });
            }

            // Fallback: If filter killed everything, show general news
            if (activeAlerts.length === 0) {
                console.log(`No alerts matched business type '${businessType}', showing general news.`);
                activeAlerts = alertsRes.rows;
            }
        } catch (e) {
            console.error('Watchdog/Alerts Error (Recovering):', e);
            // Default to empty or maybe last filtered results if meaningful
            activeAlerts = [];
        }

        // Take top 5 after filtering
        activeAlerts = activeAlerts.slice(0, 5);


        // Calc Stats
        const stats = {
            active_projects: projects.length,
            alerts_count: activeAlerts.length,
            avg_suitability: projects.length > 0
                ? Math.round(projects.reduce((acc: number, p: any) => acc + (p.suitability_score || 0), 0) / projects.length)
                : 0
        };

        const summary = {
            stats,
            projects: projects.slice(0, 5),
            tasks: tasks.slice(0, 5),
            alerts: activeAlerts
        };

        // Cache for 60 seconds
        // @ts-ignore
        await this.env.mem.put(cacheKey, JSON.stringify(summary), { expirationTtl: 60 });

        return summary;
    }

    // --- Helper ---
    async invalidateCache(userId?: number) {
        if (userId) {
            // @ts-ignore
            await this.env.mem.delete(`dashboard_summary_${userId}`);
        } else {
            // If no user, maybe we can't delete all? 
            // We just let them expire.
            // Or try to delete generic key if used before.
            // @ts-ignore
            await this.env.mem.delete('dashboard_summary');
        }
    }
    async createProject(userId: number, address: string, zone: string, details: string, score: number) {
        const sql = `
            INSERT INTO projects (user_id, address, zone, details, suitability_score)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const res = await queryPostgres(this.env, sql, [userId, address, zone, details, score]);
        await this.invalidateCache(userId);
        return res.rows[0];
    }

    async getProjects(userId: number) {
        const res = await queryPostgres(this.env, 'SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
        return res.rows;
    }

    async deleteProject(userId: number, id: string) {
        await queryPostgres(this.env, 'DELETE FROM projects WHERE id = $1 AND user_id = $2', [id, userId]);
        await this.invalidateCache(userId);
        return { success: true };
    }

    // --- Tasks CRUD ---
    async createTask(title: string, description: string = '') {
        const sql = `INSERT INTO tasks (title, description, status) VALUES ($1, $2, 'pending') RETURNING *`;
        const res = await queryPostgres(this.env, sql, [title, description]);
        await this.invalidateCache();
        return res.rows[0];
    }

    async updateTask(id: string, updates: { title?: string, description?: string, status?: string }) {
        // Dynamic update query
        const fields: string[] = [];
        const values: any[] = [];
        let idx = 1;

        if (updates.title !== undefined) { fields.push(`title = $${idx++}`); values.push(updates.title); }
        if (updates.description !== undefined) { fields.push(`description = $${idx++}`); values.push(updates.description); }
        if (updates.status !== undefined) { fields.push(`status = $${idx++}`); values.push(updates.status); }

        if (fields.length === 0) return null;

        values.push(id);
        const sql = `UPDATE tasks SET ${fields.join(', ')} WHERE id = $${idx} RETURNING *`;

        const res = await queryPostgres(this.env, sql, values);
        await this.invalidateCache();
        return res.rows[0];
    }

    async deleteTask(id: string) {
        await queryPostgres(this.env, 'DELETE FROM tasks WHERE id = $1', [id]);
        await this.invalidateCache();
        return { success: true };
    }


}
