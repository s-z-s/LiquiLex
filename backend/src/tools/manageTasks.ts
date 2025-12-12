import { Env } from '../hello-world/raindrop.gen';
import { DashboardService } from '../liquilex/dashboard';

export async function manageTasks(env: Env, action: 'create' | 'list', data?: { title?: string, description?: string }) {
    const dashboard = new DashboardService(env);

    // Ensure DB is init (lazy check)
    // await dashboard.initDB(); 

    if (action === 'create') {
        if (!data || !data.title) return { error: "Title required for creating a task." };
        console.log(`Creating Task: ${data.title}`);
        const task = await dashboard.createTask(data.title, data.description || '');
        return { message: "Task created successfully.", task };
    }

    if (action === 'list') {
        // Currently 'getSummary' fetches tasks, but let's just query directly for the agent
        // We'll reuse getSummary logic but stripped down
        // Since tasks are global in current implementation (demo), we just fetch all
        // Ideally this would be filtered by user
        const summary: any = await dashboard.getSummary(12345); // Mock User ID for now since tasks are global
        return { tasks: summary.tasks };
    }

    return { error: "Invalid action. Use 'create' or 'list'." };
}
