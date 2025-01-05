import React from 'react';
import { Code2, Rocket, Server, BookOpen, Package, Zap, Building2 } from 'lucide-react';
import Navigation from '@/components/nav/nav';
import Footer from '@/components/footer/page';
import CTA from '@/components/cta';

const ServicesPage = () => {
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
                        Our Services
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Enterprise-grade development solutions with a focus on scalability, performance, and security.
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-24">
                    {/* Landing Page Development */}
                    <div id='landing-page-development' className="relative scroll-mt-16">
                        <div className="flex items-center gap-4 mb-8">
                            <Rocket className="w-8 h-8 text-emerald-500" />
                            <h2 className="text-2xl font-bold text-white">Landing Page Development</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Basic */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 relative">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Basic</h3>
                                            <p className="text-gray-400 text-sm">3-5 days delivery</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-emerald-400 font-bold">IDR 10,000,000</div>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            "High-converting single page",
                                            "Mobile-first responsive design",
                                            "Essential animations",
                                            "Basic SEO setup",
                                            "Analytics integration",
                                            "2 revision rounds"
                                        ].map((feature, idx) => (
                                            <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                                                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Premium */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 relative">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Premium</h3>
                                            <p className="text-gray-400 text-sm">5-7 days delivery</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-emerald-400 font-bold">IDR 15,000,000</div>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            "Multi-section design",
                                            "Advanced animations",
                                            "A/B testing setup",
                                            "Advanced SEO optimization",
                                            "Custom integrations",
                                            "3 revision rounds",
                                            "Performance optimization"
                                        ].map((feature, idx) => (
                                            <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                                                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Bespoke */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 relative">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Bespoke</h3>
                                            <p className="text-gray-400 text-sm">7-14 days delivery</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-emerald-400 font-bold">Custom quote</div>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            "Custom design system",
                                            "Complex animations",
                                            "Multiple landing pages",
                                            "Advanced tracking setup",
                                            "Third-party integrations",
                                            "Unlimited revisions",
                                            "Priority support"
                                        ].map((feature, idx) => (
                                            <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                                                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-Stack Development */}
                    <div id='full-stack-development' className="relative scroll-mt-16">
                        <div className="flex items-center gap-4 mb-8">
                            <Code2 className="w-8 h-8 text-emerald-500" />
                            <h2 className="text-2xl font-bold text-white">Full-Stack Development</h2>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <div className="text-gray-300 mb-2">Hourly Rate</div>
                                        <div className="text-2xl font-bold text-white">IDR 200,000<span className="text-gray-400 text-lg">/hour</span></div>
                                    </div>
                                    <div>
                                        <div className="text-gray-300 mb-2">Project-Based Starting</div>
                                        <div className="text-2xl font-bold text-white">IDR 25,000,000</div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-4">What We Can Build:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Custom web applications",
                                        "E-commerce solutions",
                                        "Real-time systems",
                                        "Payment integrations",
                                        "User authentication",
                                        "Admin dashboards",
                                        "API development",
                                        "Database optimization"
                                    ].map((feature, idx) => (
                                        <div key={idx} className="text-gray-300 flex items-center gap-2">
                                            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Serverless Architecture */}
                    <div id='serverless-architecture' className="relative scroll-mt-16">
                        <div className="flex items-center gap-4 mb-8">
                            <Server className="w-8 h-8 text-emerald-500" />
                            <h2 className="text-2xl font-bold text-white">Serverless Architecture</h2>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                    <div>
                                        <div className="text-gray-300 mb-2">Technical Consultation</div>
                                        <div className="text-2xl font-bold text-white">IDR 250,000<span className="text-gray-400 text-lg">/hour</span></div>
                                    </div>
                                    <div>
                                        <div className="text-gray-300 mb-2">Architecture Design</div>
                                        <div className="text-2xl font-bold text-white">IDR 20,000,000<span className="text-gray-400 text-lg">/project</span></div>
                                    </div>
                                    <div>
                                        <div className="text-gray-300 mb-2">Implementation</div>
                                        <div className="text-2xl font-bold text-white">Custom quote</div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-4">What We Offer:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "AWS/GCP/Azure setup",
                                        "Microservices design",
                                        "Scalability planning",
                                        "Security implementation",
                                        "Performance optimization"
                                    ].map((feature, idx) => (
                                        <div key={idx} className="text-gray-300 flex items-center gap-2">
                                            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Package Deals */}
                <div className="relative mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <Package className="w-8 h-8 text-emerald-500" />
                        <h2 className="text-2xl font-bold text-white">Package Deals</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Startup Package */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <Package className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-xl font-semibold text-white">Startup Package</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-emerald-400">IDR 30,000,000</div>
                                    <div className="text-gray-400">2 weeks delivery</div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Premium landing page",
                                        "Basic backend API",
                                        "Authentication system",
                                        "Database setup",
                                        "Basic admin dashboard"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                                            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Growth Package */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building2 className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-xl font-semibold text-white">Growth Package</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-emerald-400">IDR 40,000,000</div>
                                    <div className="text-gray-400">3 weeks delivery</div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Custom web application",
                                        "Advanced API development",
                                        "Payment integration",
                                        "Advanced admin dashboard",
                                        "Analytics integration",
                                        "Basic cloud infrastructure"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                                            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Enterprise Package */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-xl font-semibold text-white">Enterprise Package</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold text-emerald-400">IDR 50,000,000+</div>
                                    <div className="text-gray-400">4+ weeks delivery</div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Full custom solution",
                                        "Advanced backend services",
                                        "Complete cloud infrastructure",
                                        "Security implementation",
                                        "High availability setup",
                                        "Performance optimization",
                                        "24/7 priority support"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="text-gray-300 flex items-center gap-2 text-sm">
                                            <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className="relative mt-24">
                    <div className="flex items-center gap-4 mb-12">
                        <BookOpen className="w-8 h-8 text-emerald-500" />
                        <h2 className="text-2xl font-bold text-white">Legal & Terms</h2>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 relative">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-medium text-white mb-4">Documentation</h4>
                                    <ul className="space-y-2">
                                        <li className="text-gray-300 text-sm">• Statement of Work (SOW)</li>
                                        <li className="text-gray-300 text-sm">• Master Services Agreement (MSA)</li>
                                        <li className="text-gray-300 text-sm">• Non-Disclosure Agreement (NDA)</li>
                                        <li className="text-gray-300 text-sm">• Service Level Agreement (SLA)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-4">Payment Terms</h4>
                                    <ul className="space-y-2">
                                        <li className="text-gray-300 text-sm">• 50% upfront payment required</li>
                                        <li className="text-gray-300 text-sm">• Additional revisions at hourly rate</li>
                                        <li className="text-gray-300 text-sm">• Rush delivery: +30%</li>
                                        <li className="text-gray-300 text-sm">• All prices in IDR</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-white mb-4">Value-Added Services</h4>
                                    <ul className="space-y-2">
                                        <li className="text-gray-300 text-sm">• Free initial consultation (30 min)</li>
                                        <li className="text-gray-300 text-sm">• Technical documentation</li>
                                        <li className="text-gray-300 text-sm">• Post-delivery support (1 week)</li>
                                        <li className="text-gray-300 text-sm">• Knowledge transfer sessions</li>
                                    </ul>
                                </div>
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

export default ServicesPage;