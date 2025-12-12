'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'));
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="LiquiLex" className="w-8 h-8 object-contain" />
                    <span className="font-bold text-xl tracking-tight text-white">LiquiLex</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <Link
                        href="/features"
                        className={`hover:text-white transition-colors ${isActive('/features') ? 'text-white' : ''}`}
                    >
                        Features
                    </Link>
                    <Link
                        href="/how-it-works"
                        className={`hover:text-white transition-colors ${isActive('/how-it-works') ? 'text-white' : ''}`}
                    >
                        How it Works
                    </Link>
                    <Link
                        href={isLoggedIn ? "/dashboard" : "/login"}
                        className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        {isLoggedIn ? "Dashboard" : "Get Started"}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
