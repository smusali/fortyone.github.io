import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services';
import Principal from './components/Principal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Services />
        <Principal />
      </main>
      <Footer />
    </div>
  );
};

export default App;