'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Utensils, Truck, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        businessType: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else handleSubmit();
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // Post to Raindrop backend
            // Note: In production, use env var for API URL
            const response = await fetch(`${API_BASE_URL}/api/user/context`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                router.push('/dashboard');
            } else {
                alert('Failed to save context');
            }
        } catch (error) {
            console.error(error);
            alert('Error saving context');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                <div className="mb-8">
                    <div className="flex gap-2 mb-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-blue-600' : 'bg-gray-800'}`} />
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Tell us about your business</h1>
                    <p className="text-gray-400">Lex needs this to give accurate advice.</p>
                </div>

                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {step === 1 && (
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-400">Business Name</label>
                            <input
                                type="text"
                                value={formData.businessName}
                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-lg focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="e.g. Jane's Tacos"
                                autoFocus
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-400">Business Type</label>
                            <div className="grid grid-cols-1 gap-3">
                                {['Mobile Food Unit', 'Restaurant', 'Bar/Nightclub', 'Retail'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFormData({ ...formData, businessType: type })}
                                        className={`p-4 rounded-xl border text-left transition-all ${formData.businessType === type
                                            ? 'bg-blue-600 border-blue-600'
                                            : 'bg-white/5 border-white/10 hover:border-white/30'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-400">Short Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-lg focus:border-blue-500 focus:outline-none transition-colors h-32 resize-none"
                                placeholder="e.g. Selling authentic tacos in downtown Austin..."
                                autoFocus
                            />
                        </div>
                    )}
                </motion.div>

                <button
                    onClick={handleNext}
                    disabled={loading || (step === 1 && !formData.businessName) || (step === 2 && !formData.businessType)}
                    className="w-full mt-8 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                    {loading ? 'Saving...' : step === 3 ? 'Finish Setup' : 'Continue'}
                    {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
}
