import React from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                SELECTED<br/>
                <span className="text-zinc-600">WORKS</span>
            </h2>
            <div className="hidden md:block font-mono text-sm text-zinc-500 mb-2">
                // {RESUME_DATA.projects.length.toString().padStart(2, '0')} PROJECTS FOUND
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESUME_DATA.projects.map((project, index) => (
            <Link 
              to={`/project/${project.id}`}
              key={index} 
              className={`
                group relative bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-lime-400/50 transition-colors duration-500 cursor-pointer block
                ${index === 0 ? 'md:col-span-2' : ''}
              `}
            >
              {/* Gradient Blob on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/20 rounded-full blur-[100px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-xs text-lime-400 border border-lime-400/20 px-2 py-1 rounded">
                        {project.period}
                    </span>
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, i) => (
                            <span key={i} className="font-mono text-xs text-zinc-500 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Abstract Filler Card */}
          <div className="group relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
             <div className="relative z-10">
                <Github className="w-12 h-12 mb-4 mx-auto text-white/80" />
                <h3 className="text-2xl font-bold mb-2">More on GitHub</h3>
                <p className="text-white/70 text-sm mb-6">Check out my repositories for more code.</p>
                <a href="#" className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                    @rohithvirlanki
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;