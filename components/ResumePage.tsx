import React from 'react';
import { RESUME_DATA } from '../constants';
import { Download, Mail, MapPin, Phone, Printer } from 'lucide-react';

const ResumePage: React.FC = () => {
  const { profile } = RESUME_DATA;

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-20 px-4 md:px-0">
      {/* Print Controls - Hidden when printing */}
      <div className="fixed top-24 right-4 md:right-8 z-50 print:hidden flex flex-col gap-2">
        <button 
          onClick={() => window.print()}
          className="p-3 bg-black text-white rounded-full shadow-xl hover:bg-zinc-800 transition-colors"
          title="Print Resume"
        >
          <Printer className="w-5 h-5" />
        </button>
      </div>

      <div className="container mx-auto max-w-[21cm] bg-white p-8 md:p-12 shadow-2xl print:shadow-none print:p-0">
        
        {/* Header */}
        <header className="border-b-2 border-black pb-6 mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{profile.name}</h1>
          <p className="text-lg font-mono mb-4">Cyber Security Engineer | Full Stack Developer</p>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {profile.email}
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {profile.phone}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-zinc-300 mb-3 pb-1">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-zinc-800">{profile.summary}</p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-zinc-300 mb-3 pb-1">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-2 text-sm">
            {RESUME_DATA.skills.map((cat, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline">
                <span className="font-bold w-40 shrink-0">{cat.category}:</span>
                <span className="text-zinc-800">{cat.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-zinc-300 mb-3 pb-1">Education</h2>
          <div className="space-y-4">
            {RESUME_DATA.education.map((edu, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <span className="text-sm font-mono">{edu.period}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{edu.institution}, {edu.location}</span>
                  <span className="font-semibold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-zinc-300 mb-3 pb-1">Projects</h2>
          <div className="space-y-4">
            {RESUME_DATA.projects.map((proj, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold">{proj.title}</h3>
                  <span className="text-sm font-mono">{proj.period}</span>
                </div>
                <p className="text-sm text-zinc-800 mb-1">{proj.description}</p>
                {proj.technologies && (
                  <p className="text-xs text-zinc-600 italic">Tech: {proj.technologies.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase border-b border-zinc-300 mb-3 pb-1">Certifications & Internships</h2>
          <div className="space-y-3">
            {RESUME_DATA.certificates.map((cert, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-sm">{cert.title}</h3>
                  <span className="text-xs bg-zinc-100 px-2 py-0.5 rounded">{cert.issuer}</span>
                </div>
                <p className="text-xs text-zinc-600 mt-0.5">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-zinc-300 mb-3 pb-1">Languages</h2>
          <p className="text-sm">{RESUME_DATA.languages.join(" • ")}</p>
        </section>

      </div>
      
      <style>{`
        @media print {
          @page { margin: 0; }
          body { background: white; padding: 0; }
          .container { box-shadow: none; max-width: 100%; width: 100%; padding: 2cm; }
          .print\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;