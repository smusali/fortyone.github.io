import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Strategic Advisory",
    description: "Technical due diligence, GovTech architecture review, and legacy modernization strategy for high-stakes bids.",
    number: "01"
  },
  {
    title: "Enterprise Engineering",
    description: "Production LLM system design, high-scale data platforms (60TB+), and security architecture (RBAC/PBAC).",
    number: "02"
  },
  {
    title: "Rescue & Continuity",
    description: "Eliminating race conditions, stabilizing distributed systems, and mitigating technical debt in pre-IPO environments.",
    number: "03"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brand-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 border-t border-white/10 pt-8"
        >
          <h2 className="text-sm font-medium text-brand-grey uppercase tracking-widest">Our Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-xs font-mono text-brand-grey/50 mb-6">{service.number}</div>
              <h3 className="text-2xl font-bold text-brand-white mb-4 tracking-tight group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-grey leading-relaxed text-sm md:text-base pr-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;