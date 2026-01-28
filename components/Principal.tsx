import React from 'react';
import { motion } from 'framer-motion';

const Principal: React.FC = () => {
  return (
    <section id="principal" className="py-24 px-6 md:px-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md lg:max-w-full mx-auto lg:mx-0 overflow-hidden bg-white/5"
          >
             {/* Using a placeholder as requested, with grayscale filter for the aesthetic */}
             <img 
               src="https://picsum.photos/seed/principal/600/800" 
               alt="Samir Musali"
               className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-8 tracking-tighter">
              Principal Architect: <br />
              <span className="text-brand-grey">Samir Musali.</span>
            </h2>
            
            <div className="space-y-6 text-brand-grey text-lg font-light leading-relaxed max-w-xl">
              <p>
                Staff Engineer and Technical Architect with 9+ years delivering infrastructure for YC-backed startups and global product organizations.
              </p>
              <p>
                Specializing in high-throughput data systems and production AI. Bringing Silicon Valley velocity to Enterprise rigors.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs font-mono text-brand-grey/50 uppercase tracking-widest">
                Established 2022. Incorporated in Canada.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Principal;