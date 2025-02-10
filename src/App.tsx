import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Reviews } from './components/sections/Reviews';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-text">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;