import React from 'react';
import { Shield, Zap, Code2, ArrowRight, LineChart, RefreshCw, Users, Target, MessageSquare, FileCheck, Rocket, Wrench, CheckCircle, HeartHandshake } from 'lucide-react';
import Navigation from '@/components/nav/nav';
import Footer from '@/components/footer/page';
import CTA from '@/components/cta';

const AboutPage = () => {
    const principles = [
        {
            icon: <Shield className="w-6 h-6 text-emerald-500" />,
            title: "Security",
            description: "Enterprise-grade protection at every layer, from infrastructure to code deployment, ensuring your business assets remain safeguarded."
        },
        {
            icon: <Zap className="w-6 h-6 text-emerald-500" />,
            title: "Performance",
            description: "Lightning-fast solutions optimized for scale, delivering exceptional speed and responsiveness across all platforms."
        },
        {
            icon: <LineChart className="w-6 h-6 text-emerald-500" />,
            title: "Efficiency",
            description: "Streamlined architectures and optimized workflows that maximize resource utilization while minimizing operational overhead."
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-emerald-500" />,
            title: "Adaptive",
            description: "Flexible solutions that evolve with your business needs, ready to scale and adapt to changing market demands."
        },
        {
            icon: <Shield className="w-6 h-6 text-emerald-500" />,
            title: "Reliable",
            description: "Rock-solid systems built for 99.99% uptime, ensuring your business operations run smoothly around the clock."
        }
    ];

    const process = [
        {
            icon: <MessageSquare className="w-6 h-6 text-emerald-500" />,
            title: "Discovery Call",
            description: "Understanding your needs, goals, and technical requirements.",
            step: "01"
        },
        {
            icon: <FileCheck className="w-6 h-6 text-emerald-500" />,
            title: "Proposal & Planning",
            description: "Detailed solution design, timeline, and resource allocation.",
            step: "02"
        },
        {
            icon: <Code2 className="w-6 h-6 text-emerald-500" />,
            title: "Development",
            description: "Agile development with regular updates and milestone reviews.",
            step: "03"
        },
        {
            icon: <Wrench className="w-6 h-6 text-emerald-500" />,
            title: "Testing & QA",
            description: "Rigorous testing and quality assurance procedures.",
            step: "04"
        },
        {
            icon: <Rocket className="w-6 h-6 text-emerald-500" />,
            title: "Deployment",
            description: "Smooth deployment with zero-downtime implementation.",
            step: "05"
        },
        {
            icon: <HeartHandshake className="w-6 h-6 text-emerald-500" />,
            title: "Ongoing Support",
            description: "Continued maintenance and technical support.",
            step: "06"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
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
                        Building Tomorrow's Solutions
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We combine technical excellence with strategic thinking to deliver solutions that drive your business forward.
                    </p>
                </div>

                {/* Principles Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Principles</h2>
                    <div className="flex flex-col gap-8">
                        {/* First Row - 3 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {principles.slice(0, 3).map((principle, index) => (
                                <div key={index} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            {principle.icon}
                                            <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                                        </div>
                                        <p className="text-gray-300">{principle.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Row - 2 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
                            {principles.slice(3, 5).map((principle, index) => (
                                <div key={index} className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            {principle.icon}
                                            <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                                        </div>
                                        <p className="text-gray-300">{principle.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Process</h2>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                        <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {process.map((step, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">
                                            {step.step}
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                {step.icon}
                                                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-300">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
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

export default AboutPage;