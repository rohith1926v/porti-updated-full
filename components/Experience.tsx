import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[#080808]">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 border-b border-white/10 pb-8">
            <h2 className="text-4xl font-bold tracking-tighter mb-2">XP_LOG</h2>
            <p className="font-mono text-zinc-500 text-sm">Execution history and credentials</p>
        </div>

        <div className="space-y-12">
            {/* Education Block */}
            <div>
                <h3 className="font-mono text-lime-400 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                    / education
                </h3>
                <div className="space-y-4">
                    {RESUME_DATA.education.map((edu, index) => (
                        <div key={index} className="group flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors">
                            <div className="flex-1">
                                <h4 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                                <div className="text-zinc-500 mt-1">{edu.institution}</div>
                            </div>
                            <div className="flex flex-col md:items-end mt-2 md:mt-0 font-mono text-sm">
                                <span className="text-zinc-400">{edu.period}</span>
                                <span className="text-zinc-600">{edu.score}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Block */}
            <div>
                <h3 className="font-mono text-purple-400 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    / certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {RESUME_DATA.certificates.map((cert, index) => (
                        <div key={index} className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5 hover:bg-zinc-900/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="font-mono text-xs text-purple-400 border border-purple-400/20 px-2 py-0.5 rounded">
                                    {cert.issuer}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;