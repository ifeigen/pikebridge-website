'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-green-900/10" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900/30" />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Enterprise Solutions for the Modern Web
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-lg">
                            Pikebridge delivers scalable, secure, and high-performance solutions for businesses that demand excellence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/services">
                                <button className="group bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2">
                                    View Our Services
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="relative w-full">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full sm:w-[500px]">
                            {/* Performance Score */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl transform scale-105" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-colors relative">
                                    <div className="space-y-3">
                                        <div className="text-sm text-gray-300">Performance Score</div>
                                        <div className="text-3xl font-bold">99.9%</div>
                                        <div className="h-2 bg-blue-500/20 rounded-full">
                                            <div className="h-2 bg-blue-500 rounded-full w-[99%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Uptime */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/5 rounded-2xl blur-xl transform scale-105" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-colors relative">
                                    <div className="space-y-3">
                                        <div className="text-sm text-gray-300">System Uptime</div>
                                        <div className="text-3xl font-bold">99.99%</div>
                                        <div className="h-2 bg-green-500/20 rounded-full">
                                            <div className="h-2 bg-green-500 rounded-full w-[99.9%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500/5 rounded-2xl blur-xl transform scale-105" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-colors relative">
                                    <div className="space-y-3">
                                        <div className="text-sm text-gray-300">Avg Response Time</div>
                                        <div className="text-3xl font-bold">120ms</div>
                                        <div className="h-2 bg-purple-500/20 rounded-full">
                                            <div className="h-2 bg-purple-500 rounded-full w-[95%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Client Satisfaction */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-500/5 rounded-2xl blur-xl transform scale-105" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:bg-white/15 transition-colors relative">
                                    <div className="space-y-3">
                                        <div className="text-sm text-gray-300">Client Satisfaction</div>
                                        <div className="text-3xl font-bold">98.5%</div>
                                        <div className="h-2 bg-orange-500/20 rounded-full">
                                            <div className="h-2 bg-orange-500 rounded-full w-[98.5%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
            </div>
        </div>
    );
};

export default Hero;