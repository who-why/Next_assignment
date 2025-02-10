import React, { useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-['Roboto_Condensed'] font-bold text-white">SaaSFlow</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-primary transition-colors">Pricing</a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary hover:bg-secondary px-4 py-2 rounded-lg transition-colors text-white">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 p-4"
        >
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-white hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary hover:bg-secondary px-4 py-2 rounded-lg transition-colors text-white">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};