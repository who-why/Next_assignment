import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [formErrors, setFormErrors] = useState<{ email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      setIsSubmitted(true);
      setFormErrors({});
      setFormData({ email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors(error.flatten().fieldErrors);
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-lg p-8"
        >
          <h2 className="text-subheading text-white mb-6 text-center">Get in Touch</h2>
          {isSubmitted ? (
            <div className="text-center text-green-500 flex items-center justify-center space-x-2">
              <CheckCircle2 />
              <span>Thank you for your message! We'll get back to you soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                />
                {formErrors.email && (
                  <p className="text-red-500 mt-1 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-white">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-white"
                />
                {formErrors.message && (
                  <p className="text-red-500 mt-1 text-sm">{formErrors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary px-8 py-3 rounded-lg transition-colors text-white"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
