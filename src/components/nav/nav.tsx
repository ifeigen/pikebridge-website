'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            {/* Main Navigation */}
            <nav className="bg-gray-900 text-white shadow fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-400 focus:outline-none"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        {/* Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <Link href="/">
                                <span className="text-xl font-serif text-white">
                                    Pikebridge
                                </span>
                            </Link>
                        </div>

                        {/* Contact Button */}
                        <Link href="/contact">
                            <button className="bg-emerald-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-emerald-700 transition flex items-center gap-1 text-xs sm:text-sm">
                                Contact <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Menu Panel */}
                    <div className="absolute top-0 left-0 w-64 h-full bg-gray-900 shadow-lg">
                        {/* Menu Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-xl font-bold text-gray-900">Menu</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white hover:text-gray-400"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="py-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className="block px-4 py-3 text-white hover:bg-emerald-600 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Spacer to prevent content from hiding under fixed nav */}
            <div className="h-16"></div>
        </>
    );
};

export default Navigation;