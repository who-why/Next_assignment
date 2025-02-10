import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption for your data."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times."
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description: "Deep insights into your business metrics and KPIs."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-subheading-sm text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 font-['Inter']">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};