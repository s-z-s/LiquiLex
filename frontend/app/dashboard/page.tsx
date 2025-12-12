'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, FileText, AlertCircle, MapPin, Trash2, MessageSquare, Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '../../config';
import TaskModal from '../../components/TaskModal';
import ProjectDetailsModal from '../../components/ProjectDetailsModal';

export default function DashboardPage() {
    const [user, setUser] = useState<{ business_name: string, business_type?: string } | null>(null);
    const [projects, setProjects] = useState<any[]>([]);
    const [tasks, setTasks] = useState<any[]>([]);
    const [alerts, setAlerts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Task Modal State
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<any | null>(null);

    // Project Report Modal State
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const router = useRouter();

    useEffect(() => {
        // 1. Load User
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error('Failed to parse user', e);
            }
        }

        // 2. Load Dashboard Data
        const fetchDashboard = async () => {
            try {
                // Init DB for demo
                await fetch(`${API_BASE_URL}/api/admin/init-dashboard`, { method: 'POST' }).catch(() => { });

                const token = localStorage.getItem('token');
                const res = await fetch(`${API_BASE_URL}/api/dashboard/summary`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await res.json();

                if (data.projects) setProjects(data.projects);
                if (data.tasks) setTasks(data.tasks);
                if (data.alerts) setAlerts(data.alerts);
            } catch (error) {
                console.error('Failed to load dashboard', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, []);

    const handleDeleteProject = async (id: string) => {
        try {
            await fetch(`${API_BASE_URL}/api/projects/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setProjects(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            console.error('Failed to delete project', error);
        }
    };

    const handleAskLex = (project: any) => {
        // Try to find existing session for this site
        try {
            const stored = localStorage.getItem('lex_chat_sessions');
            if (stored) {
                const sessions = JSON.parse(stored);
                // Look for a session where title includes the address
                // (Titles are often "Site at ..." or "Search Address...")
                const match = sessions.find((s: any) => s.title && s.title.includes(project.address));
                if (match) {
                    router.push(`/dashboard/chat?session=${match.id}`);
                    return;
                }
            }
        } catch (e) {
            console.error('Error checking sessions', e);
        }

        // Fallback: Start new context
        router.push(`/dashboard/chat?context=site&address=${encodeURIComponent(project.address)}&zone=${encodeURIComponent(project.zone)}`);
    };

    const handleViewReport = (project: any) => {
        setSelectedProject(project);
        setIsReportModalOpen(true);
    };

    // --- Task Handlers ---

    const handleOpenTask = (task?: any) => {
        setSelectedTask(task || null);
        setIsTaskModalOpen(true);
    };

    const handleSaveTask = async (taskData: any) => {
        try {
            if (taskData.id) {
                // Update
                const res = await fetch(`${API_BASE_URL}/api/tasks/${taskData.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: taskData.title,
                        description: taskData.description,
                        status: taskData.status
                    })
                });
                const { task } = await res.json();
                setTasks(prev => prev.map(t => t.id === task.id ? task : t));
            } else {
                // Create
                const res = await fetch(`${API_BASE_URL}/api/tasks`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: taskData.title,
                        description: taskData.description
                    })
                });
                const { task } = await res.json();
                setTasks(prev => [task, ...prev]);
            }
        } catch (error) {
            console.error('Failed to save task', error);
        }
    };

    const handleDeleteTask = async (id: string) => {
        try {
            await fetch(`${API_BASE_URL}/api/tasks/${id}`, { method: 'DELETE' });
            setTasks(prev => prev.filter(t => t.id !== id));
        } catch (error) {
            console.error('Failed to delete task', error);
        }
    };

    return (
        <div className="h-full overflow-y-auto p-8 relative">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Command Center</h1>
                        <p className="text-gray-400">Overview for {user?.business_name || 'your business'}</p>
                    </div>
                    <Link href="/dashboard/zoning">
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                            <Plus className="w-4 h-4" /> New Project
                        </button>
                    </Link>
                </header>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {loading ? (
                        <>
                            <StatCardSkeleton />
                            <StatCardSkeleton highlight={true} />
                            <StatCardSkeleton />
                        </>
                    ) : (
                        <>
                            <StatCard
                                title="Active Projects"
                                value={projects.length.toString()}
                                icon={<FileText className="w-5 h-5 text-blue-400" />}
                                description="Across Austin"
                            />
                            <StatCard
                                title="Regulatory Alerts"
                                value={alerts.length.toString()}
                                icon={<AlertCircle className="w-5 h-5 text-orange-400" />}
                                description="Recent Warnings"
                                highlight={true}
                            />
                            <StatCard
                                title="Avg. Suitability"
                                value={`${projects.length > 0 ? Math.round(projects.reduce((acc, p) => acc + (p.suitability_score || p.score || 0), 0) / projects.length) : 0}%`}
                                icon={<Activity className="w-5 h-5 text-green-400" />}
                                description="Site viability score"
                            />
                        </>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content: Projects List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Recent Projects</h2>
                        </div>

                        {loading ? (
                            <div className="space-y-4">
                                <ProjectCardSkeleton />
                                <ProjectCardSkeleton />
                                <ProjectCardSkeleton />
                            </div>
                        ) : projects.length === 0 ? (
                            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                                <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                                <h3 className="text-lg font-medium text-gray-300">No projects yet</h3>
                                <p className="text-gray-500 mb-6">Search a location to check zoning and fees.</p>
                                <Link href="/dashboard/zoning" className="text-blue-400 hover:underline">Start a Zoning Check</Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {projects.map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        onDelete={() => handleDeleteProject(project.id)}
                                        onAsk={() => handleAskLex(project)}
                                        onViewReport={() => handleViewReport(project)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Watchdog & Tasks */}
                    <div className="space-y-8">
                        {/* Tasks Widget */}
                        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Lex Tasks</h3>
                                <button
                                    onClick={() => handleOpenTask()}
                                    className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-3">
                                {loading && (
                                    <>
                                        <TaskSkeleton />
                                        <TaskSkeleton />
                                    </>
                                )}
                                {!loading && tasks.length === 0 && <p className="text-gray-500 text-sm">No active tasks.</p>}
                                {!loading && tasks.map(task => (
                                    <TaskItem
                                        key={task.id}
                                        task={task}
                                        onClick={() => handleOpenTask(task)}
                                    />
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2 text-sm text-center text-gray-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                                View All Tasks
                            </button>
                        </div>

                        {/* Watchdog Widget */}
                        <div className="bg-gradient-to-br from-orange-900/20 to-transparent rounded-2xl border border-orange-500/20 p-6">
                            <h3 className="text-lg font-semibold mb-4 text-orange-200">Regulatory Watchdog</h3>
                            <div className="space-y-4">
                                {loading && (
                                    <>
                                        <WatchdogSkeleton />
                                        <WatchdogSkeleton />
                                    </>
                                )}
                                {!loading && alerts.length === 0 && <p className="text-gray-500 text-sm">No alerts currently.</p>}
                                {!loading && alerts.map(alert => (
                                    <WatchdogItem
                                        key={alert.id}
                                        title={alert.title}
                                        date={alert.date_text || new Date(alert.created_at).toLocaleDateString()}
                                        severity={alert.severity}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Task Edit Modal */}
            <TaskModal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                task={selectedTask}
                onSave={handleSaveTask}
                onDelete={handleDeleteTask}
            />

            {/* Project Report Modal */}
            <ProjectDetailsModal
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
                project={selectedProject}
            />
        </div>
    );
}

function StatCard({ title, value, icon, description, highlight }: any) {
    return (
        <div className={`p-6 rounded-2xl border ${highlight ? 'bg-orange-900/10 border-orange-500/30' : 'bg-white/5 border-white/10'}`}>
            <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium ${highlight ? 'text-orange-200' : 'text-gray-400'}`}>{title}</span>
                <div className={`p-2 rounded-lg ${highlight ? 'bg-orange-500/20' : 'bg-white/5'}`}>{icon}</div>
            </div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-sm text-gray-500">{description}</div>
        </div>
    );
}

function ProjectCard({ project, onDelete, onAsk, onViewReport }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all"
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{project.address}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${(project.suitability_score || project.score) > 80 ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                            {project.suitability_score || project.score || 0}% Match
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">Zone: {project.zone} • Checked {project.date || new Date(project.created_at).toLocaleDateString()}</p>

                    <div className="flex gap-2">
                        <button
                            onClick={onAsk}
                            className="flex items-center gap-1.5 text-xs bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-lg hover:bg-blue-500/20 transition-colors"
                        >
                            <MessageSquare className="w-3 h-3" /> Ask Lex
                        </button>
                        <button
                            onClick={onViewReport}
                            className="flex items-center gap-1.5 text-xs bg-white/5 text-gray-400 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            View Report
                        </button>
                    </div>
                </div>
                <button
                    onClick={onDelete}
                    className="p-2 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}

function TaskItem({ task, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 cursor-pointer transition-colors"
        >
            <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${task.status === 'completed' ? 'bg-green-500' : task.status === 'in_progress' ? 'bg-blue-500' : 'bg-yellow-500'}`} />
                <span className={`text-sm ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                    {task.title}
                </span>
            </div>
            {task.status !== 'completed' && <ArrowRight className="w-3 h-3 text-gray-600" />}
        </div>
    );
}


// --- Skeletons ---

function StatCardSkeleton({ highlight }: { highlight?: boolean }) {
    return (
        <div className={`p-6 rounded-2xl border ${highlight ? 'bg-orange-900/10 border-orange-500/10' : 'bg-white/5 border-white/10'} animate-pulse`}>
            <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-24 bg-white/10 rounded"></div>
                <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
            </div>
            <div className="h-8 w-16 bg-white/20 rounded mb-2"></div>
            <div className="h-3 w-32 bg-white/5 rounded"></div>
        </div>
    );
}

function ProjectCardSkeleton() {
    return (
        <div className="p-5 bg-white/5 border border-white/10 rounded-xl animate-pulse">
            <div className="flex justify-between items-start">
                <div className="w-full">
                    <div className="h-5 w-48 bg-white/10 rounded mb-2"></div>
                    <div className="h-3 w-32 bg-white/5 rounded mb-4"></div>
                    <div className="flex gap-2">
                        <div className="h-8 w-24 bg-white/10 rounded-lg"></div>
                        <div className="h-8 w-24 bg-white/5 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TaskSkeleton() {
    return (
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 animate-pulse mb-3">
            <div className="flex items-center gap-3 w-full">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="h-3 w-32 bg-white/10 rounded"></div>
            </div>
        </div>
    );
}

function WatchdogSkeleton() {
    return (
        <div className="border-l-2 border-white/10 pl-4 py-2 animate-pulse mb-4">
            <div className="h-4 w-40 bg-white/10 rounded mb-2"></div>
            <div className="h-2 w-24 bg-white/5 rounded"></div>
        </div>
    );
}

function WatchdogItem({ title, date, severity }: any) {
    const color = severity === 'high' ? 'text-orange-400' : 'text-center-blue-400';
    return (
        <div className="border-l-2 border-white/10 pl-4 py-1">
            <h4 className={`text-sm font-medium ${severity === 'high' ? 'text-orange-400' : 'text-blue-400'} mb-0.5`}>{title}</h4>
            <p className="text-xs text-gray-500">Effective from {date}</p>
        </div>
    );
}
