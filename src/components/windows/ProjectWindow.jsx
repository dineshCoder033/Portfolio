import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';

export const ProjectWindow = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
  initialOffset,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Buyer-Seller Portal',
      category: 'Web',
      year: '2024',
      description: 'A full-featured e-commerce platform supporting multi-user roles (buyers and sellers), product catalogs, cart management, and seamless order flow.',
      tags: ['TypeScript', 'Angular', 'SCSS', 'REST API'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=700&q=80',
      demoUrl: 'https://github.com/dineshCoder033/ecommerce',
      codeUrl: 'https://github.com/dineshCoder033/ecommerce',
      highlight: 'Core Full-Stack Repository',
    },
    {
      id: 2,
      title: 'Aura Retro OS - Portfolio Desktop',
      category: 'Web',
      year: '2024',
      description: 'An interactive vintage operating system portfolio desk with draggable pop-up windows, Web Audio API sound synthesis, and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS', 'Web Audio', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80',
      demoUrl: 'https://github.com/dineshCoder033/Portfolio',
      codeUrl: 'https://github.com/dineshCoder033/Portfolio',
      highlight: 'Featured Desktop Experience',
    },
    {
      id: 3,
      title: 'REST API Data Interaction Engine',
      category: 'API',
      year: '2024',
      description: 'Robust API handling project demonstrating asynchronous GET and POST data pipelines, form payload handling, and error validation.',
      tags: ['JavaScript', 'REST APIs', 'Async/Await', 'JSON'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80',
      demoUrl: 'https://github.com/dineshCoder033/API-POST-GET',
      codeUrl: 'https://github.com/dineshCoder033/API-POST-GET',
      highlight: 'Live API Integration',
    },
    {
      id: 4,
      title: 'LeetCode Algorithmic Problem Solving',
      category: 'DSA',
      year: '2024',
      description: 'Curated repository and active LeetCode solutions covering Arrays, Two Pointers, Hash Maps, String Manipulation, and Dynamic Programming.',
      tags: ['LeetCode', 'DSA', 'Algorithms', 'Java/JS'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80',
      demoUrl: 'https://leetcode.com/u/DINESHKUAMR-11/',
      codeUrl: 'https://github.com/dineshCoder033',
      highlight: 'Active LeetCode Profile',
    },
    {
      id: 5,
      title: 'TypeScript & Angular Utility Suite',
      category: 'Web',
      year: '2023',
      description: 'Precision calculation utilities and responsive web interfaces developed with strong typing, SCSS modular design, and Angular components.',
      tags: ['TypeScript', 'Angular', 'HTML5', 'SCSS'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80',
      demoUrl: 'https://github.com/dineshCoder033/TS-calculator',
      codeUrl: 'https://github.com/dineshCoder033/TS-calculator',
      highlight: 'Strongly Typed Web Tool',
    },
  ];

  const filters = ['All', 'Web', 'API', 'DSA'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <RetroWindow
      id="project"
      path="C:\DINESH\projects"
      title="Projects"
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-dashed border-[#d4cbba] pb-4">
          <div>
            <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-[#353c2f] uppercase">
              FEATURED PROJECTS & REPOSITORIES
            </h2>
            <p className="text-xs font-mono text-[#616858]">Real-world applications from GitHub & LeetCode</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  playFolderClick();
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border-2 border-[#2c3327] transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#c77843] text-white shadow-retro-sm translate-y-[-1px]'
                    : 'bg-[#faf6ee] text-[#4d5345] hover:bg-[#eae3d2]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#faf7f0] border-2 border-[#2c3327] shadow-retro hover:shadow-retro-lg transition-all duration-200 overflow-hidden"
            >
              {/* Project Image Banner */}
              <div className="relative h-44 sm:h-48 overflow-hidden border-b-2 border-[#2c3327] bg-[#eae4d5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 right-2.5 font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#f4cf65] text-[#2c3327] border border-[#2c3327] shadow-retro-sm">
                  {project.category} • {project.year}
                </span>
                {project.highlight && (
                  <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#5c6753] text-white border border-[#2c3327]">
                    ⭐ {project.highlight}
                  </span>
                )}
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#2c3327] group-hover:text-[#c77843] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4d5345] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="mt-4 pt-3 border-t border-[#e2d9c8]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#f0ebd9] text-[#555d4d] border border-[#d1c6b2]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        playFolderClick();
                        setSelectedProject(project);
                      }}
                      className="flex-1 py-1.5 px-3 rounded-lg bg-[#5c6753] hover:bg-[#4a5443] text-white font-mono text-xs font-bold border-2 border-[#2c3327] shadow-retro-sm text-center transition-all cursor-pointer"
                    >
                      Quick View
                    </button>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-3 rounded-lg bg-[#f4cf65] hover:bg-[#e4be52] text-[#2c3327] font-mono text-xs font-bold border-2 border-[#2c3327] shadow-retro-sm text-center transition-all"
                    >
                      GitHub Repo ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Quick View */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-[#faf6ee] border-3 border-[#2c3327] rounded-2xl max-w-lg w-full p-6 shadow-retro-xl animate-pop-in space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#2c3327] pb-3">
                <span className="font-mono text-xs font-bold text-[#5c6753]">
                  PREVIEW // {selectedProject.category}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-6 h-6 rounded bg-[#e27373] text-white font-mono font-bold flex items-center justify-center border border-[#2c3327] cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-xl border-2 border-[#2c3327]"
              />
              <h3 className="font-display font-bold text-xl text-[#2c3327]">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-[#464c3f] leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-mono bg-[#f4cf65] border border-[#2c3327] rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-[#c77843] text-white font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] text-center"
                >
                  Open on GitHub ↗
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-[#5c6753] text-white font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </RetroWindow>
  );
};
