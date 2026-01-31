import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RESUME_DATA } from '../constants';
import { ArrowLeft, ExternalLink, Github, Layers, Target, Trophy } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = RESUME_DATA.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
            <h1 className="text-6xl font-bold text-zinc-800 mb-4">404</h1>
            <p className="text-zinc-500 font-mono mb-8">PROJECT_DATA_CORRUPTED_OR_MISSING</p>
            <Link to="/" className="text-lime-400 hover:underline">Return to Base</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/#projects" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm">BACK_TO_GRID</span>
        </Link>

        <div className="border-b border-white/10 pb-12 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-2xl leading-tight">
                    {project.title}
                </h1>
                <div className="flex gap-4">
                    {project.repoLink && (
                        <a 
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {project.demoLink && (
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="p-3 rounded-full bg-lime-400 text-black hover:bg-lime-300 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, i) => (
                    <span key={i} className="font-mono text-xs text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
                <section>
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        MISSION BRIEF
                    </h2>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                        {project.longDescription || project.description}
                    </p>
                </section>

                {project.challenges && (
                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-purple-400" />
                            CHALLENGES
                        </h2>
                        <ul className="space-y-4">
                            {project.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-400">
                                    <span className="mt-2 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" />
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {project.outcomes && (
                    <section>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-400" />
                            OUTCOMES
                        </h2>
                        <ul className="space-y-4">
                            {project.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-400">
                                    <span className="mt-2 w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />
                                    {outcome}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>

            <div className="space-y-8">
                <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                    <h3 className="font-mono text-xs text-zinc-500 mb-4">TIMELINE</h3>
                    <p className="text-white font-bold">{project.period}</p>
                </div>
                
                <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                    <h3 className="font-mono text-xs text-zinc-500 mb-4">ROLE</h3>
                    <p className="text-white font-bold">Lead Developer & Engineer</p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/5">
                    <h3 className="font-mono text-xs text-zinc-500 mb-4">STATUS</h3>
                    <div className="flex items-center gap-2 text-lime-400 font-bold">
                        <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                        COMPLETED
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;