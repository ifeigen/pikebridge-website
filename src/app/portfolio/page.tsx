'use client';

import React, { useState } from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Navigation from '@/components/nav/nav';
import Footer from '@/components/footer/page';
import CTA from '@/components/cta';
import Image from 'next/image';

const PortfolioPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'landing', label: 'Landing Pages' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'serverless', label: 'Serverless' }
    ];

    const projects = [
        {
            title: "ESL Course Landing Page",
            category: "landing",
            description: "High-converting landing page for ESL Course",
            metrics: ["45% Conversion Rate", "70.59ms TTFB", "100 SEO Score"],
            tech: ["React", "Framer Motion", "TailwindCSS"],
            icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
            image: "/assets/portfolios/english-solutions/english-solutions-hero.png"
        },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-900">
            <Navigation />
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-emerald-900/10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/2" />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 py-24">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Work
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Explore our portfolio of enterprise solutions delivering scalability, security, and performance.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategory === category.id
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group relative">
                            {/* Card Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />

                            {/* Card Content */}
                            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
                                {/* Project Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover object-top"
                                />

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        {project.icon}
                                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                    </div>

                                    <p className="text-gray-300 mb-6">
                                        {project.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-sm text-emerald-400 font-medium">{metric}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Project Button */}
                                    <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">50+</div>
                                <div className="text-gray-400">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                                <div className="text-gray-400">Users Served</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                                <div className="text-gray-400">Uptime</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                <div className="text-gray-400">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CTA />
            <Footer />
        </div>
    );
};

export default PortfolioPage;