import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    features: [
      "5 Team Members",
      "10GB Storage",
      "Basic Analytics",
      "24/7 Support",
      "API Access",
    ],
  },
  {
    name: "Professional",
    price: 79,
    popular: true,
    features: [
      "15 Team Members",
      "50GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "API Access",
      "Custom Integrations",
      "Team Training",
    ],
  },
  {
    name: "Enterprise",
    price: 149,
    features: [
      "Unlimited Team Members",
      "500GB Storage",
      "Enterprise Analytics",
      "Dedicated Support",
      "API Access",
      "Custom Integrations",
      "Team Training",
      "Custom Development",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-subheading text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-gray-800 rounded-lg p-8 relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  Popular
                </div>
              )}
              <h3 className="text-subheading-sm text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.popular
                    ? 'bg-primary hover:bg-secondary text-white'
                    : 'border border-gray-600 hover:border-gray-500 text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};