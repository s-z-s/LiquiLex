'use client';

import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-20 relative">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
                        >
                            From Idea to <span className="text-blue-500">Permit</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            LiquiLex simplifies the complex world of city regulations into three simple steps.
                        </motion.p>
                    </div>

                    <div className="max-w-5xl mx-auto relative">
                        {/* Connecting Line - Animated */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
                            <div className="w-full h-full bg-white/10" />
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
                            />
                        </div>

                        {/* Step 1 */}
                        <Step
                            number="01"
                            icon={<Upload className="w-6 h-6 text-white" />}
                            title="Define Your Project"
                            description="Describe your business idea and location. Tell Lex what you want to build in plain English."
                            align="left"
                            delay={0.2}
                        />

                        {/* Step 2 */}
                        <Step
                            number="02"
                            icon={<MessageSquare className="w-6 h-6 text-white" />}
                            title="Consult with Lex"
                            description="Ask questions like 'Can I open a food truck here?' or 'What are the noise limits?'. Lex checks zoning and codes instantly."
                            align="right"
                            delay={0.4}
                        />

                        {/* Step 3 */}
                        <Step
                            number="03"
                            icon={<FileCheck className="w-6 h-6 text-white" />}
                            title="Get Your Checklist"
                            description="Receive a comprehensive compliance report, including a fee estimate and a list of required permits to submit to the city."
                            align="left"
                            delay={0.6}
                        />
                    </div>

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

function Step({ number, icon, title, description, align, delay }: { number: string, icon: any, title: string, description: string, align: 'left' | 'right', delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay }}
            className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Center Node */}
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-white/10 z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"
                />
            </div>

            {/* Content */}
            <div className={`flex-1 w-full ${align === 'left' ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center md:text-left`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-6 shadow-lg shadow-blue-900/20 border border-white/10 ${align === 'left' ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    {icon}
                </div>
                <div className="text-sm font-mono text-blue-400 mb-2 tracking-widest">STEP {number}</div>
                <h3 className="text-3xl font-bold mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0 text-lg">
                    {description}
                </p>
            </div>

            {/* Spacer for the other side */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}
