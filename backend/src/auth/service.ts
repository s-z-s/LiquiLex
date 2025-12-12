import { Env } from '../hello-world/raindrop.gen';
import { queryPostgres } from './db';
import { sign } from 'hono/jwt';

const JWT_SECRET = 'liquilex-secret-key-change-in-prod'; // In prod, use env var

export class AuthService {
    private env: Env;

    constructor(env: Env) {
        this.env = env;
    }

    async initAuthDB() {
        const sql = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                salt TEXT NOT NULL,
                business_name TEXT,
                business_type TEXT,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `;
        await queryPostgres(this.env, sql);
        return { message: 'Users table created' };
    }

    async signup(email: string, password: string, businessName: string, businessType: string) {
        // Check if user exists
        const checkSql = 'SELECT id FROM users WHERE email = $1';
        const existing = await queryPostgres(this.env, checkSql, [email]);

        if (existing.rows.length > 0) {
            throw new Error('User already exists');
        }

        // Hash password using Web Crypto
        const { hash, salt } = await this.hashPassword(password);

        // Insert user
        const insertSql = `
            INSERT INTO users (email, password_hash, salt, business_name, business_type)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, business_name, business_type
        `;
        const result = await queryPostgres(this.env, insertSql, [email, hash, salt, businessName, businessType]);
        const user = result.rows[0];

        // Generate token
        const token = await sign({ userId: user.id, email: user.email, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 }, JWT_SECRET);

        // Sync to SmartMemory for Lex Agent
        await this.syncToMemory(user);

        return { user, token };
    }

    async login(email: string, password: string) {
        const sql = 'SELECT * FROM users WHERE email = $1';
        const result = await queryPostgres(this.env, sql, [email]);

        if (result.rows.length === 0) {
            throw new Error('Invalid credentials');
        }

        const user = result.rows[0];
        const isValid = await this.verifyPassword(password, user.password_hash, user.salt);

        if (!isValid) {
            throw new Error('Invalid credentials');
        }

        const token = await sign({ userId: user.id, email: user.email, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 }, JWT_SECRET);

        // Sync to SmartMemory for Lex Agent
        await this.syncToMemory(user);

        return {
            user: {
                id: user.id,
                email: user.email,
                business_name: user.business_name,
                business_type: user.business_type
            },
            token
        };
    }

    // --- Helpers ---

    private async syncToMemory(user: any) {
        try {
            // @ts-ignore
            if (this.env.USER_CONTEXT) {
                // @ts-ignore
                const memory = await this.env.USER_CONTEXT.getProceduralMemory();
                await memory.putProcedure('current_user', JSON.stringify({
                    businessName: user.business_name,
                    businessType: user.business_type,
                    email: user.email,
                    timestamp: new Date().toISOString()
                }));
                console.log('✅ Synced user context to SmartMemory for Lex');
            }
        } catch (e) {
            console.warn('Failed to sync user context to memory', e);
        }
    }

    // --- Web Crypto Helpers ---

    private async hashPassword(password: string): Promise<{ hash: string; salt: string }> {
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            new TextEncoder().encode(password),
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        );
        const key = await crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt,
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            true,
            ['encrypt', 'decrypt']
        );

        // Export key as raw bytes to store as hash (simplification for demo)
        // Better: use deriveBits and convert to hex
        const exported = await crypto.subtle.exportKey('raw', key);

        return {
            hash: this.buf2hex(exported),
            salt: this.buf2hex(salt)
        };
    }

    private async verifyPassword(password: string, storedHash: string, storedSalt: string): Promise<boolean> {
        const salt = this.hex2buf(storedSalt);
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            new TextEncoder().encode(password),
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        );
        const key = await crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt as any,
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            true,
            ['encrypt', 'decrypt']
        );

        const exported = await crypto.subtle.exportKey('raw', key);
        const hash = this.buf2hex(exported);

        return hash === storedHash;
    }

    private buf2hex(buffer: ArrayBuffer | Uint8Array): string {
        return [...new Uint8Array(buffer)]
            .map(x => x.toString(16).padStart(2, '0'))
            .join('');
    }

    private hex2buf(hex: string): Uint8Array {
        return new Uint8Array(hex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
    }
}
