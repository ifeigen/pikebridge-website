import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Clock, Shield } from 'lucide-react';
import Navigation from '@/components/nav/nav';
import Footer from '@/components/footer/page';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-emerald-500" />,
      title: "Email",
      details: "hello@pikebridge.dev",
      description: "For general inquiries and support"
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-500" />,
      title: "Phone",
      details: "+1 (234) 567-890",
      description: "Monday to Friday, 9AM to 6PM"
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-500" />,
      title: "Location",
      details: "Jakarta, Indonesia",
      description: "Available for global projects"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-5 h-5 text-emerald-500" />,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      title: "Secure Communication",
      description: "Your information is encrypted and secure"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      title: "Detailed Discussion",
      description: "We ensure all requirements are clearly understood"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-emerald-900/10" />
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Great Together
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to explore possibilities, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-gray-300 focus:outline-none focus:border-emerald-500 transition-colors">
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="landing" className="bg-gray-900">Landing Page Development</option>
                    <option value="fullstack" className="bg-gray-900">Full-Stack Development</option>
                    <option value="serverless" className="bg-gray-900">Serverless Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Tell us about your project"
                  />
                </div>

                <button className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition flex items-center justify-center gap-2">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Features */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-white/5 p-3 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{info.title}</h3>
                        <p className="text-emerald-400 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-white/5 p-3 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;