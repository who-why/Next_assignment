import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "SaaSFlow has transformed how we manage our projects. The efficiency gains are remarkable.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The analytics features have given us insights we never had before. Absolutely game-changing.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "GlobalTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "Customer support is phenomenal, and the platform's reliability is unmatched.",
  },
];

export const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-subheading text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with SaaSFlow.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: `-${currentReview * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className="min-w-full px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                  <div className="flex items-center mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4 text-left">
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {review.role} at {review.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{review.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentReview === index ? 'bg-primary' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};