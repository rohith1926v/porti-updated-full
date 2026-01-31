import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
                <h2 className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800 mb-6">
                    RV.
                </h2>
                <div className="flex flex-col gap-1 font-mono text-zinc-500">
                    <span>{RESUME_DATA.profile.location}</span>
                    <a href={`mailto:${RESUME_DATA.profile.email}`} className="hover:text-white transition-colors">
                        {RESUME_DATA.profile.email}
                    </a>
                </div>
            </div>
            
            <div className="mt-12 md:mt-0 flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-2xl font-bold hover:text-lime-400 transition-colors group">
                    GITHUB <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform" />
                </a>
                <a href="#" className="flex items-center gap-3 text-2xl font-bold hover:text-blue-400 transition-colors group">
                    LINKEDIN <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform" />
                </a>
                <a href="#" className="flex items-center gap-3 text-2xl font-bold hover:text-sky-400 transition-colors group">
                    TWITTER <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform" />
                </a>
            </div>
        </div>
        
        <div className="flex justify-between items-end border-t border-zinc-900 pt-8">
            <p className="text-zinc-600 text-xs font-mono">
                © {currentYear} // DESIGNED & DEVELOPED BY ROHITH
            </p>
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-zinc-500 hover:text-white transition-colors font-mono text-xs"
            >
                BACK_TO_TOP
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;