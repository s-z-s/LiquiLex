import { X, MapPin, FileText, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any;
}

export default function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-blue-400" />
                            Project Report
                        </h2>

                        <div className="space-y-6">
                            {/* Header Info */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Site Address</h3>
                                <div className="text-lg font-semibold flex items-start gap-2">
                                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                                    {project.address}
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-sm text-gray-500 block mb-1">Zoning District</span>
                                    <span className="text-xl font-bold text-white">{project.zone}</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-sm text-gray-500 block mb-1">Suitability Score</span>
                                    <span className={`text-xl font-bold ${(project.suitability_score || project.score || 0) > 80 ? 'text-green-400' : 'text-yellow-400'
                                        }`}>
                                        {project.suitability_score || project.score || 0}%
                                    </span>
                                </div>
                            </div>

                            {/* Details/Report Content */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Analysis Details</h3>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                                    {project.details || "No detailed report available."}
                                </div>
                            </div>

                            <div className="text-xs text-gray-500 flex items-center gap-1.5 pt-2">
                                <Calendar className="w-3 h-3" />
                                Report generated on {project.date || new Date(project.created_at || Date.now()).toLocaleDateString()}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
