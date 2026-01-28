import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 px-6 md:px-12 bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="text-brand-grey text-sm font-medium">
            © 2026 FortyOne Technologies Inc. All Rights Reserved.
          </p>
          <p className="text-brand-grey/50 text-xs">
            Toronto • San Francisco • Dubai (Partner Network)
          </p>
        </div>

        <div className="flex items-center space-x-6">
           <a 
             href="https://linkedin.com" 
             target="_blank" 
             rel="noreferrer" 
             className="text-brand-grey hover:text-brand-white transition-colors"
             aria-label="LinkedIn"
           >
             <Linkedin size={20} strokeWidth={1.5} />
           </a>
           <a 
             href="https://github.com" 
             target="_blank" 
             rel="noreferrer" 
             className="text-brand-grey hover:text-brand-white transition-colors"
             aria-label="GitHub"
           >
             <Github size={20} strokeWidth={1.5} />
           </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;