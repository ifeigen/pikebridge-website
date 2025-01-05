'use client';
import React from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <>
            {/* CTA Section */}
            <div className="my-32 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can help transform your business with scalable, secure solutions.
                </p>
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition flex items-center gap-2 mx-auto">
                    Schedule a Discovery Call <ArrowRight className="w-5 h-5" />
                </button>
            </div>

        </>
    )
}

export default CTA;