'use client';

import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Calculator, Mic, Building2, FileWarning, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Now Live in Austin, TX
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                                Civic Compliance, <br />
                                <span className="text-blue-500">Decoded by AI.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                        >
                            Navigate zoning laws, calculate permit fees, and verify compliance instantly.
                            Powered by Cerebras and LiquidMetal for zero-latency answers.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20">
                                Start Free
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all">
                                How it Works
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 border-y border-white/5 bg-white/2">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Opening a business shouldn't require a law degree.</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Small business owners spend an average of <strong>100+ hours</strong> navigating city bureaucracy.
                                Confusing PDF codes, hidden fees, and zoning maps from the 90s kill dreams before they start.
                            </p>
                            <ul className="space-y-4">
                                <ProblemItem icon={<FileWarning className="text-red-400" />} text="Obscure Zoning Restrictions" />
                                <ProblemItem icon={<Clock className="text-orange-400" />} text="Weeks of Waiting for Answers" />
                                <ProblemItem icon={<Building2 className="text-yellow-400" />} text="Unexpected Permit Fees" />
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 shrink-0" />
                                    <div className="bg-gray-800 rounded-2xl rounded-tl-none p-4 text-sm text-gray-300">
                                        I just want to open a coffee shop on 5th St. Is that allowed?
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 flex-row-reverse">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 shrink-0 flex items-center justify-center">
                                        <Mic className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl rounded-tr-none p-4 text-sm text-blue-100">
                                        Yes, but with conditions. 5th St is zoned <strong>CS-MU</strong> (Commercial Services - Mixed Use).
                                        You'll need a Change of Use permit ($480) and a grease trap inspection.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to comply</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Three powerful tools, one simple dashboard.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<MapPin className="w-6 h-6 text-blue-400" />}
                            title="Instant Zoning Checks"
                            description="Verify if your business is allowed at any address in Austin instantly using Vultr PostGIS."
                            link="/features"
                        />
                        <FeatureCard
                            icon={<Calculator className="w-6 h-6 text-purple-400" />}
                            title="Fee Calculator"
                            description="Get deterministic permit fee calculations based on square footage and trade type."
                            link="/features"
                        />
                        <FeatureCard
                            icon={<Mic className="w-6 h-6 text-green-400" />}
                            title="Voice Agent"
                            description="Talk to Lex, our AI expert, to navigate complex regulations naturally."
                            link="/features"
                        />
                    </div>
                </div>
            </section>

            {/* Who is this for? */}
            <section className="py-24 bg-white/2 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4"
                        >
                            Built for the Builders
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 max-w-2xl mx-auto"
                        >
                            Whether you're sketching a napkin idea or managing a portfolio.
                        </motion.p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <PersonaCard
                            title="Small Business Owners"
                            description="Open your dream cafe, food truck, or boutique without getting stuck in permit hell."
                            tags={["Food Trucks", "Retail", "Services"]}
                            delay={0}
                        />
                        <PersonaCard
                            title="Architects & Developers"
                            description="Pre-screen sites instantly. Save weeks of due diligence on every project."
                            tags={["Site Feasibility", "Zoning Analysis", "Cost Est."]}
                            delay={0.1}
                        />
                        <PersonaCard
                            title="City Officials"
                            description="Reduce the backlog of invalid applications by giving citizens clear answers first."
                            tags={["Code Compliance", "Permit Routing", "Efficiency"]}
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-mono text-blue-400 mb-8 tracking-widest uppercase">Powered by Next-Gen Infrastructure</p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <TechLogo name="Vultr" />
                        <TechLogo name="Cerebras" />
                        <TechLogo name="LiquidMetal" />
                        <TechLogo name="Next.js" />
                        <TechLogo name="PostGIS" />
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-black border-t border-white/10 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="Is the zoning data official?"
                            answer="We sync directly with the City of Austin's GIS portal. However, always verify with an official city planner before breaking ground."
                            delay={0}
                        />
                        <FAQItem
                            question="Does it cover all of Texas?"
                            answer="Currently, we are live in Austin, TX. We are expanding to Dallas and Houston in Q4 2025."
                            delay={0.1}
                        />
                        <FAQItem
                            question="How accurate are the fee estimates?"
                            answer="Our fee engine uses the exact same logic as the city's fee schedule. We calculate down to the penny based on your inputs."
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to break ground?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join 500+ Austin business owners who skipped the line.
                    </p>
                    <Link href="/signup" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                        Get Started for Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 LiquiLex. Built with LiquidMetal & Cerebras.</p>
                </div>
            </footer>
        </div>
    );
}

function ProblemItem({ icon, text }: { icon: any, text: string }) {
    return (
        <li className="flex items-center gap-3 text-gray-300">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                {React.cloneElement(icon, { className: `w-4 h-4 ${icon.props.className}` })}
            </div>
            {text}
        </li>
    );
}

import React from 'react';

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
    return (
        <Link href={link}>
            <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors h-full group"
            >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
                <div className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                </div>
            </motion.div>
        </Link>
    );
}

function PersonaCard({ title, description, tags, delay }: { title: string, description: string, tags: string[], delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 group"
        >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/50 text-xs text-gray-300 border border-white/10 group-hover:border-blue-500/20 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

function TechLogo({ name }: { name: string }) {
    return (
        <div className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 select-none">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            {name}
        </div>
    );
}

function FAQItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="border border-white/10 rounded-xl p-6 hover:bg-white/5 hover:border-blue-500/20 transition-all duration-300 cursor-default"
        >
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="text-blue-500">Q.</span> {question}
            </h3>
            <p className="text-gray-400 pl-6 leading-relaxed">{answer}</p>
        </motion.div>
    );
}
