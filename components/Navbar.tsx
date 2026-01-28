import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Expertise', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'The Principal', href: '#principal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-brand-white z-50">
          FortyOne
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-grey hover:text-brand-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:principal@fortyone.tech"
            className="text-sm font-medium px-5 py-2 border border-brand-white/30 text-brand-white rounded-none hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full h-screen bg-brand-black flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light text-brand-white tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:principal@fortyone.tech"
                className="text-xl font-medium px-8 py-3 border border-brand-white/30 text-brand-white mt-4"
              >
                Inquire
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;