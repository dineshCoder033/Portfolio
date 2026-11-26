import React from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';

export const WorkWindow = ({
  isOpen,
  onClose,
  onOpenWindow,
  onOpenCertificate,
  zIndex,
  onFocus,
  initialOffset,
}) => {
  const experiences = [
    {
      id: 'gomath',
      role: 'Software Developer',
      company: 'GOMATH TECHNOLOGIES',
      period: '03/2026 - Present',
      location: 'Erode, India',
      type: 'Full-Time',
      badgeColor: 'bg-[#f4cf65]',
      bulletPoints: [
        'Contributed to the development of enterprise-level HRMS and mobility-based applications, leveraging the MERN Stack, PHP, Laravel, Filament, SQL, and Flutter to build scalable solutions, user-centric digital experiences in a real-time production environment.',
        'Built interactive dashboards, data visualizations, and analytical reports, while contributing to SEO optimization and Digital Marketing initiatives to enhance website visibility and engagement.',
      ],
      skills: ['MERN Stack', 'PHP', 'Laravel', 'Filament', 'SQL', 'Flutter', 'HRMS', 'Dashboards', 'SEO'],
    },
    {
      id: 'ethicsecur',
      role: 'Full-Stack Developer Intern',
      company: 'ES ETHICSECUR SOFTEC',
      period: '12/2025 - 03/2026',
      location: 'Salem, India',
      type: 'Internship',
      badgeColor: 'bg-[#c77843] text-white',
      bulletPoints: [
        'Contributed to a real-time production project and led the company-side UI/UX redesign, developing scalable components using React.js with TypeScript, MUI, and Tailwind CSS.',
        'Designed interactive graphs and analytical dashboards, while supporting Digital Marketing (DM) initiatives and improving overall SEO performance.',
        'Collaborated with clients to gather requirements and improve frontend UX across 100% responsive interfaces.',
      ],
      skills: ['React.js', 'TypeScript', 'MUI', 'Tailwind CSS', 'UI/UX Redesign', 'Analytical Dashboards', 'SEO'],
    },
    {
      id: 'cubeai',
      role: 'Web Developer Intern',
      company: 'CubeAi Solutions Pvt Ltd',
      period: 'Dec 2024 - Mar 2025',
      location: 'India',
      type: 'Internship',
      badgeColor: 'bg-[#faf6ee]',
      bulletPoints: [
        'Worked on modern Full Stack Technologies including MERN stack and REST APIs.',
        'Developed responsive client-facing interfaces and tested backend API endpoints for seamless data workflows.',
      ],
      skills: ['MERN Stack', 'REST APIs', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      id: 'pinnacle',
      role: 'Web Developer Intern',
      company: 'Pinnacle Internship',
      period: 'Mar 2025 - Apr 2025',
      location: 'Virtual / Remote',
      type: 'Virtual Internship',
      badgeColor: 'bg-[#faf6ee]',
      bulletPoints: [
        'Completed a virtual internship focused on web development fundamentals, component architecture, and responsive styling.',
        'Engineered responsive layouts and delivered modular web projects adhering to clean code standards.',
      ],
      skills: ['Web Development', 'HTML5/CSS3', 'JavaScript', 'Responsive Design'],
    },
    {
      id: 'nexlogic',
      role: 'Web Developer Intern',
      company: 'Nexlogic software Solutions',
      period: 'Jul 2024 - Jul 2024',
      location: 'India',
      type: 'Internship',
      badgeColor: 'bg-[#faf6ee]',
      bulletPoints: [
        'Focused on web development fundamentals and threat detection.',
        'Gained hands-on experience in core web security practices, fundamental coding patterns, and threat awareness.',
      ],
      skills: ['Web Development', 'Threat Detection', 'Web Security Basics', 'JavaScript'],
    },
  ];

  const handleViewCert = (certId) => {
    playFolderClick();
    if (onOpenCertificate) {
      onOpenCertificate(certId);
    } else if (onOpenWindow) {
      onOpenWindow('certificate');
    }
  };

  return (
    <RetroWindow
      id="work"
      path="C:\DINESH\works"
      title="Work Experience & Career"
      isOpen={isOpen}
      onClose={onClose}
      accentTab={true}
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
      maxWidth="max-w-4xl lg:max-w-5xl"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-[#353c2f] uppercase">
            WORK EXPERIENCE & CAREER
          </h2>
          <div className="w-12 h-1 bg-[#c77843] mx-auto mt-1 rounded-full" />
          <p className="text-xs font-mono text-[#616858] mt-1.5">
            5 Professional roles, production contributions, and verified certificates
          </p>
        </div>

        {/* Action bar: Tech Stack shortcut & Certificate Hub */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Certificate Quick Launcher */}
          <div className="p-3 bg-[#fdfaf3] rounded-xl border-2 border-[#2c3327] shadow-retro-sm flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">📜</span>
              <div>
                <p className="text-xs font-mono font-bold text-[#2c3327]">
                  Experience Certificates
                </p>
                <p className="text-[10px] font-mono text-[#616858]">
                  5 verified credentials available
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleViewCert('gomath')}
              className="px-3 py-1.5 bg-[#c77843] hover:bg-[#b56936] text-white font-mono text-xs font-bold rounded-lg border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer whitespace-nowrap active:translate-y-0.5"
            >
              View Certificates ↗
            </button>
          </div>

          {/* Quick Link to Tech Stack Window */}
          <div className="p-3 bg-[#faf7f0] rounded-xl border-2 border-[#2c3327] shadow-retro-sm flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-xs font-mono font-bold text-[#2c3327]">
                  Full-Stack Toolchain
                </p>
                <p className="text-[10px] font-mono text-[#616858]">
                  29 Languages, Frameworks & AI Tools
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                onOpenWindow && onOpenWindow('techstack');
              }}
              className="px-3 py-1.5 bg-[#f4cf65] hover:bg-[#eac04d] text-[#2c3327] font-mono text-xs font-bold rounded-lg border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer whitespace-nowrap active:translate-y-0.5"
            >
              Open Tech Stack ↗
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-5 rounded-2xl bg-[#faf7f0] border-2 border-[#2c3327] shadow-retro-sm relative overflow-hidden space-y-3"
            >
              {/* Header: Company, Role & Period Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c77843] border border-[#2c3327]" />
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#2c3327]">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-[#5c6753]">
                      | {exp.role}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-[#c77843] font-semibold mt-0.5">
                    📍 {exp.location}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#f4cf65] border-2 border-[#2c3327] text-[#2c3327] shadow-retro-sm">
                    {exp.period}
                  </span>

                  {/* Single-Click View Certificate Button */}
                  <button
                    type="button"
                    onClick={() => handleViewCert(exp.id)}
                    className="px-3 py-1 bg-[#fffdf7] hover:bg-[#c77843] hover:text-white text-[#2c3327] font-mono text-xs font-bold rounded-lg border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer flex items-center gap-1 active:translate-y-0.5"
                    title={`View Certificate for ${exp.company}`}
                  >
                    <span>📜</span>
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4a5043] leading-relaxed">
                {exp.bulletPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-[#c77843] font-bold mt-1">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Skill pills */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-dashed border-[#dcd3c2]">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f0ebd9] text-[#555d4d] border border-[#d1c6b2]"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

                {/* Direct Certificate Link */}
                <button
                  type="button"
                  onClick={() => handleViewCert(exp.id)}
                  className="text-xs font-mono font-bold text-[#c77843] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Verify Credential #{exp.id.toUpperCase()}</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RetroWindow>
  );
};
