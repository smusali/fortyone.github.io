import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-10 lg:col-start-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-brand-white mb-8"
          >
            Engineering Business Continuity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-brand-grey max-w-2xl leading-relaxed font-light mb-12"
          >
            Strategic technical advisory for global enterprises and Series A scale-ups. We bridge the gap between Silicon Valley innovation and Enterprise governance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <a
              href="#services"
              className="group inline-flex items-center justify-center bg-brand-white text-brand-black px-8 py-4 text-sm font-semibold tracking-wide transition-transform duration-300 hover:bg-brand-blue hover:text-white"
            >
              View Expertise
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <span className="text-brand-grey text-sm tracking-wide uppercase font-medium">
              Trusted by leadership at YC W23, W15, and Global GovTech Initiatives.
            </span>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract geometric decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[60vh] opacity-10 pointer-events-none hidden lg:block bg-gradient-to-b from-brand-white/0 via-brand-white/5 to-brand-white/0 blur-3xl rounded-full" />
    </section>
  );
};

export default Hero;