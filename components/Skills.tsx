import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  // Flatten all skills into a single array for the marquee
  const allSkills = RESUME_DATA.skills.flatMap(s => s.items);

  return (
    <section className="py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center gap-16">
          {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent stroke-text hover:text-lime-400 transition-colors duration-300 cursor-default"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center gap-16">
          {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <span 
              key={index} 
              className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent stroke-text hover:text-lime-400 transition-colors duration-300 cursor-default"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        .stroke-text:hover {
            -webkit-text-stroke: 0px;
        }
      `}</style>
    </section>
  );
};

export default Skills;