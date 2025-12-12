'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Save, Loader2 } from 'lucide-react';

interface Task {
    id?: string;
    title: string;
    description?: string;
    status: 'pending' | 'completed' | 'in_progress';
}

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task | null;
    onSave: (task: Task) => Promise<void>;
    onDelete: (input: string) => Promise<void>; // Using 'input' to avoid shadowing variable name issues if any, but ID string is expected
}

export default function TaskModal({ isOpen, onClose, task, onSave, onDelete }: TaskModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<Task['status']>('pending');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description || '');
            setStatus(task.status);
        } else {
            setTitle('');
            setDescription('');
            setStatus('pending');
        }
    }, [task, isOpen]);

    const handleSave = async () => {
        if (!title.trim()) return;
        setLoading(true);
        try {
            await onSave({
                id: task?.id,
                title,
                description,
                status
            });
            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!task?.id) return;
        if (!confirm('Are you sure you want to delete this task?')) return;
        setLoading(true);
        try {
            await onDelete(task.id);
            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <h2 className="text-lg font-semibold">{task ? 'Edit Task' : 'New Task'}</h2>
                            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Task Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Call City Planner"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Description / Notes</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Details about this task..."
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                                <div className="flex gap-2">
                                    {(['pending', 'in_progress', 'completed'] as const).map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setStatus(s)}
                                            className={`flex-1 py-2 rounded-lg text-sm font-medium border border-transparent transition-all capitalize
                                                ${status === s
                                                    ? (s === 'completed' ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-blue-600 text-white')
                                                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                                }`}
                                        >
                                            {s.replace('_', ' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border-t border-white/10 bg-white/5">
                            {task ? (
                                <button
                                    onClick={handleDelete}
                                    disabled={loading}
                                    className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm px-3 py-2 rounded-lg hover:bg-red-500/10"
                                >
                                    <Trash2 className="w-4 h-4" /> Delete
                                </button>
                            ) : <div></div>}

                            <button
                                onClick={handleSave}
                                disabled={!title.trim() || loading}
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                {task ? 'Save Changes' : 'Create Task'}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
