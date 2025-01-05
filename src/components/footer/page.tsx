'use client';

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gray-900">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/20" />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-serif text-white">Pikebridge</h2>
                        <p className="text-gray-400 text-sm">
                            Enterprise solutions for the modern web. Building scalable, secure, and high-performance applications.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/pikebridge/" className="text-gray-400 hover:text-emerald-500 transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/thepikebridge" className="text-gray-400 hover:text-emerald-500 transition">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="/services/#landing-page-development" className="text-gray-400 hover:text-emerald-500 transition text-sm">Landing Page Development</a></li>
                            <li><a href="/services/#full-stack-development" className="text-gray-400 hover:text-emerald-500 transition text-sm">Full-Stack Development</a></li>
                            <li><a href="/services/#serverless-architecture" className="text-gray-400 hover:text-emerald-500 transition text-sm">Serverless Architecture</a></li>
                            {/* <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition text-sm">Technical Consultation</a></li> */}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-emerald-500 transition text-sm">About Us</a></li>
                            <li><a href="/portfolio" className="text-gray-400 hover:text-emerald-500 transition text-sm">Portfolio</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-emerald-500 transition text-sm">Services</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-emerald-500 transition text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-emerald-500" />
                                <a href="mailto:hello@pikebridge.dev" className="hover:text-emerald-500 transition">
                                    contact@pikebridge.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Phone className="w-4 h-4 text-emerald-500" />
                                <a href="tel:+1234567890" className="hover:text-emerald-500 transition">
                                    +62 813 2711 0261
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span>
                                    Jakarta, Indonesia
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Pikebridge. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition text-sm">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;