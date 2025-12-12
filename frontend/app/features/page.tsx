'use client';

import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import { MapPin, Calculator, Mic, ShieldCheck, Search, FileText, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 relative">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
                        >
                            Powerful Tools for <span className="text-blue-500">Compliance</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            LiquiLex combines geospatial data, deterministic logic, and generative AI to solve the hardest parts of opening a business.
                        </motion.p>
                    </div>

                    {/* Feature 1: Zoning */}
                    <FeatureSection
                        icon={<MapPin className="w-8 h-8 text-blue-400" />}
                        title="Geospatial Zoning Engine"
                        description="Don't guess where you can build. Our Vultr-powered PostGIS engine checks your exact coordinates against thousands of zoning polygons instantly."
                        details={[
                            "Real-time Point-in-Polygon analysis",
                            "Visual map interface with zone overlays",
                            "Instant 'Allowed/Not Allowed' verdict",
                            "Links to specific code sections"
                        ]}
                        align="left"
                        delay={0.2}
                        visual={<ZoningMapVisual />}
                    />

                    {/* Feature 2: Fees */}
                    <FeatureSection
                        icon={<Calculator className="w-8 h-8 text-purple-400" />}
                        title="Deterministic Fee Calculator"
                        description="Hidden costs kill projects. We use SmartSQL to run exact fee schedules against your project specs, giving you a penny-perfect estimate."
                        details={[
                            "Calculates base fees + incremental costs",
                            "Supports multiple trade types (Building, Electrical, Plumbing)",
                            "Updates automatically when city schedules change",
                            "Exportable cost breakdown"
                        ]}
                        align="right"
                        delay={0.4}
                        visual={<FeeCalculatorVisual />}
                    />

                    {/* Feature 3: Voice Agent */}
                    <FeatureSection
                        icon={<Mic className="w-8 h-8 text-green-400" />}
                        title="Lex: The AI Compliance Expert"
                        description="Talk to your compliance officer. Lex uses Cerebras Llama 3.3 to understand your questions and query our regulatory database in real-time."
                        details={[
                            "Natural voice interaction (Speech-to-Text & TTS)",
                            "Strict RAG (Retrieval Augmented Generation) for accuracy",
                            "Cites specific regulations (Title 25)",
                            "Remembers your business context"
                        ]}
                        align="left"
                        delay={0.6}
                        visual={<LexChatVisual />}
                    />

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-32"
                    >
                        <h2 className="text-3xl font-bold mb-8">Ready to start?</h2>
                        <Link href="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all text-lg group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                            Launch Your Business
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

function FeatureSection({ icon, title, description, details, align, delay, visual }: { icon: any, title: string, description: string, details: string[], align: 'left' | 'right', delay: number, visual: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay }}
            className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {description}
                </p>
                <ul className="space-y-4">
                    {details.map((detail, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: delay + (i * 0.1) }}
                            className="flex items-center gap-3 text-gray-300"
                        >
                            <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                            {detail}
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 w-full">
                <div className="aspect-video rounded-3xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 relative overflow-hidden group shadow-2xl shadow-black/50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {visual}
                </div>
            </div>
        </motion.div>
    );
}

// Visual Components

function ZoningMapVisual() {
    return (
        <div className="relative w-full h-full p-8 overflow-hidden">
            {/* Map Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Zoning Polygons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                {/* Polygon 1 (CS-MU) */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 border border-blue-500/50 rounded-lg transform rotate-12" />
                {/* Polygon 2 (SF-3) */}
                <div className="absolute bottom-1/4 right-1/4 w-40 h-24 bg-yellow-500/10 border border-yellow-500/30 rounded-lg transform -rotate-6" />
                {/* Polygon 3 (LI) */}
                <div className="absolute top-1/3 right-1/3 w-24 h-40 bg-purple-500/10 border border-purple-500/30 rounded-lg transform rotate-45" />
            </motion.div>

            {/* Pin Drop */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
                <MapPin className="w-12 h-12 text-red-500 drop-shadow-[0_4px_8px_rgba(239,68,68,0.5)]" fill="currentColor" />
            </motion.div>

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-xs font-mono"
            >
                <div className="text-gray-400">Zoning Code</div>
                <div className="text-blue-400 font-bold">CS-MU-CO-NP</div>
            </motion.div>
        </div>
    );
}

function FeeCalculatorVisual() {
    return (
        <div className="w-3/4 max-w-sm bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400 border-b border-white/10 pb-2">
                    <span>Item</span>
                    <span>Cost</span>
                </div>

                <FeeItem label="Base Permit Fee" amount="$180.00" delay={0.2} />
                <FeeItem label="Technology Surcharge" amount="$14.40" delay={0.4} />
                <FeeItem label="Review Hour (x2)" amount="$212.00" delay={0.6} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-between pt-4 border-t border-white/10 font-bold"
                >
                    <span className="text-white">Total Estimate</span>
                    <span className="text-green-400">$406.40</span>
                </motion.div>
            </div>
        </div>
    );
}

function FeeItem({ label, amount, delay }: { label: string, amount: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="flex items-center justify-between text-sm"
        >
            <span className="text-gray-300">{label}</span>
            <span className="font-mono text-gray-400">{amount}</span>
        </motion.div>
    );
}

function LexChatVisual() {
    return (
        <div className="w-full max-w-md p-6">
            <div className="space-y-4">
                {/* User Message */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-end"
                >
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[80%]">
                        Can I sell alcohol on a patio in East Austin?
                    </div>
                </motion.div>

                {/* AI Thinking */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex items-center gap-2 text-xs text-gray-500 ml-2"
                >
                    <Search className="w-3 h-3 animate-spin" />
                    Checking Title 25...
                </motion.div>

                {/* Lex Response */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex justify-start"
                >
                    <div className="bg-white/10 border border-white/10 text-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] shadow-lg">
                        <p className="mb-2">Yes, but you need a <span className="text-blue-400 font-semibold">Conditional Use Permit</span>.</p>
                        <div className="flex items-center gap-2 bg-black/30 p-2 rounded-lg text-xs text-gray-400">
                            <FileText className="w-3 h-3" />
                            <span>Ref: § 25-2-808</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
