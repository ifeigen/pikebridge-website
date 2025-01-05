import React from 'react';
import { Code2, Server, Rocket, ChevronRight, Building2, Shield, Zap, Users, LineChart, Clock } from 'lucide-react';
import Navigation from '@/components/nav/nav';
import Hero from '@/components/home/hero';
import Footer from '@/components/footer/page';
import Link from 'next/link';
import CTA from '@/components/cta';

const HomePage = () => {
  const services = [
    {
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "Landing Page Development",
      description: "High-converting landing pages built for scale and performance.",
      link: "/services#landing-page-development"
    },
    {
      icon: <Code2 className="w-6 h-6 text-green-500" />,
      title: "Full-Stack Development",
      description: "End-to-end solutions for modern business needs.",
      link: "/services#full-stack-development"
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500" />,
      title: "Serverless Architecture",
      description: "Cloud-native solutions built for reliability and scale.",
      link: "/services#serverless-architecture"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "40%+", label: "Conversion Rate" },
    { number: "100k+", label: "Daily Users" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security implementations with modern authentication systems."
    },
    {
      icon: <Building2 className="w-6 h-6 text-green-500" />,
      title: "Scalable Architecture",
      description: "Systems designed to grow with your business needs."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "High-Performance Solutions",
      description: "Optimized systems delivering lightning-fast experiences across all platforms."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Dedicated Support",
      description: "Round-the-clock technical support and continuous maintenance services."
    },
    {
      icon: <LineChart className="w-6 h-6 text-red-500" />,
      title: "Data-Driven Development",
      description: "Strategic decisions backed by analytics and performance metrics."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "Rapid Deployment",
      description: "Efficient development cycles with continuous integration and deployment."
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navigation />
      <Hero />
      {/* Services Overview */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Technical Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />

      <Footer />
    </div>
  );
};

export default HomePage;