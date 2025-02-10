import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Workflow with
            <span className="text-primary"> SaaSFlow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto font-['Inter']">
            Streamline your business operations with our powerful SaaS platform. 
            Built for modern teams who demand excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-primary hover:bg-secondary px-8 py-3 rounded-lg transition-all flex items-center justify-center text-white text-lg font-medium shadow-lg">
              Start Free Trial <ArrowRight className="ml-2" />
            </button>
            <button className="border border-gray-500 hover:border-gray-300 px-8 py-3 rounded-lg transition-all text-white text-lg font-medium shadow-lg">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
