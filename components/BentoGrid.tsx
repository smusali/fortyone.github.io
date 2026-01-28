import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid: React.FC = () => {
  return (
    <section id="approach" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(300px,auto)]">
          
          {/* Card 1: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-white/20 transition-colors duration-500 group"
          >
            <div>
              <h3 className="text-xl font-semibold text-brand-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors">The Delivery Gap</h3>
              <div className="w-12 h-[1px] bg-white/20 mb-6"></div>
              <p className="text-brand-grey leading-relaxed text-sm md:text-base">
                Digital transformation stalls not because of vision, but because of execution risk. Complexity kills momentum.
              </p>
            </div>
            <div className="mt-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                 <path d="M12 2v20M2 12h20" />
               </svg>
            </div>
          </motion.div>

          {/* Card 2: The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 p-8 border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-white/20 transition-colors duration-500 group"
          >
             <div>
              <h3 className="text-xl font-semibold text-brand-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors">The Architect's View</h3>
              <div className="w-12 h-[1px] bg-white/20 mb-6"></div>
              <p className="text-brand-grey leading-relaxed text-sm md:text-base">
                We provide high-level technical due diligence, architecture validation, and rescue strategies for mission-critical systems.
              </p>
            </div>
            <div className="mt-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                 <line x1="3" y1="9" x2="21" y2="9" />
                 <line x1="9" y1="21" x2="9" y2="9" />
               </svg>
            </div>
          </motion.div>

          {/* Card 3: Metric */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 p-8 border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent flex flex-col justify-center items-center text-center hover:border-white/20 transition-colors duration-500"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-brand-white mb-4 tracking-tighter">
              $500M+
            </h3>
            <p className="text-brand-grey text-sm uppercase tracking-widest font-medium">
              Enterprise Value Architected
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;