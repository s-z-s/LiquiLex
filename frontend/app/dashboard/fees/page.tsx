'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, ArrowRight, Loader2, AlertCircle, Bot } from 'lucide-react';
import { API_BASE_URL } from '../../../config';

export default function FeesPage() {
    const [formData, setFormData] = useState({
        category: 'Plan Review',
        trade: 'Building',
        sq_ft: ''
    });

    const validTrades: Record<string, string[]> = {
        'Plan Review': ['Building'],
        'New Construction': ['Building', 'Electrical', 'Plumbing']
    };

    const handleCategoryChange = (newCategory: string) => {
        const availableTrades = validTrades[newCategory] || [];
        setFormData({
            ...formData,
            category: newCategory,
            trade: availableTrades[0] || '' // Reset trade to first valid option
        });
    };

    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch(`${API_BASE_URL}/api/fees/calculate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: formData.category,
                    trade: formData.trade,
                    sq_ft: Number(formData.sq_ft)
                })
            });

            const data = await response.json();

            if (data.error) {
                setError(data.error);
            } else {
                setResult(data.result);

                // Log Activity
                const activity = JSON.parse(localStorage.getItem('recentActivity') || '[]');
                activity.unshift({
                    type: 'fee',
                    timestamp: new Date().toISOString(),
                    details: `Calculated fee for ${formData.trade}`
                });
                localStorage.setItem('recentActivity', JSON.stringify(activity.slice(0, 10)));
            }
        } catch (err) {
            setError('Failed to calculate fees');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full overflow-y-auto p-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Permit Fee Calculator</h1>
                    <p className="text-gray-400">Estimate your permit costs instantly based on project size and type.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Permit Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    <option value="Plan Review">Plan Review</option>
                                    <option value="New Construction">New Construction</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Trade Type</label>
                                <select
                                    value={formData.trade}
                                    onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                >
                                    {validTrades[formData.category]?.map(trade => (
                                        <option key={trade} value={trade}>{trade}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Square Footage</label>
                                <input
                                    type="number"
                                    value={formData.sq_ft}
                                    onChange={(e) => setFormData({ ...formData, sq_ft: e.target.value })}
                                    placeholder="e.g. 2000"
                                    className="w-full bg-black/30 border border-white/10 rounded-xl p-4 focus:border-blue-500 focus:outline-none transition-colors"
                                    required
                                    min="1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                                {loading ? 'Calculating...' : 'Calculate Fee'}
                            </button>
                        </form>
                    </div>

                    {/* Result */}
                    <div className="flex flex-col justify-center">
                        {error ? (
                            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4 text-red-400">
                                <AlertCircle className="w-6 h-6 shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">Calculation Error</h3>
                                    <p>{error}</p>
                                </div>
                            </div>
                        ) : result ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden"
                            >
                                <div className="relative z-10">
                                    <div className="text-blue-200 font-medium mb-2">Estimated Total Fee</div>
                                    <div className="text-5xl font-bold mb-6 flex items-start gap-1">
                                        <span className="text-2xl mt-2">$</span>
                                        {result.total_fee.toFixed(2)}
                                    </div>

                                    <div className="space-y-3 border-t border-white/20 pt-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-blue-200">Base Fee</span>
                                            <span>${result.base_fee.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-blue-200">Incremental Fee</span>
                                            <span>${result.incremental_fee.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/20">
                                        <a
                                            href={`/dashboard/chat?context=fee&amount=${result.total_fee}&trade=${formData.trade}`}
                                            className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-colors font-medium backdrop-blur-sm"
                                        >
                                            <Bot className="w-5 h-5" />
                                            Ask Lex about this Fee
                                        </a>
                                    </div>
                                </div>

                                {/* Decorative background */}
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                            </motion.div>
                        ) : (
                            <div className="text-center text-gray-500 p-8 border-2 border-dashed border-white/10 rounded-2xl">
                                <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Enter project details to see the estimated fee.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
