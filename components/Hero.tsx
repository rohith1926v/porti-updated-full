import React from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowDownRight, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { profile } = RESUME_DATA;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto">
          
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
             <div className="w-2 h-2 bg-lime-400 rounded-full animate-ping"></div>
             <span className="font-mono text-xs md:text-sm text-lime-400 tracking-widest uppercase border border-lime-400/30 px-3 py-1 rounded-full bg-lime-400/5">
                Available for work
             </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 mix-blend-screen">
            <span className="block text-zinc-500 hover:text-white transition-colors duration-500 cursor-default">ROHITH</span>
            <span className="block text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-500 cursor-default">VIRLANKI</span>
          </h1>

          <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
             <p className="font-mono text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed">
                {profile.summary}
             </p>

             <div className="flex flex-col gap-2 text-right">
                <div className="flex items-center justify-end gap-2 text-zinc-300">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-bold">CYBER SECURITY</span>
                </div>
                <div className="flex items-center justify-end gap-2 text-zinc-300">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-bold">FULL STACK</span>
                </div>
             </div>
          </div>

          <div className="mt-16 flex gap-4">
            <a 
                href="#projects"
                className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-lime-400 transition-all duration-300"
            >
                View Work 
                <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
            </a>
            <Link 
                to="/resume"
                className="px-6 py-3 rounded-full font-bold border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-white"
            >
                Resume.pdf
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;