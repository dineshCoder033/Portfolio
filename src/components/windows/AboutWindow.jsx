import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';

export const AboutWindow = ({
  isOpen,
  onClose,
  onOpenWindow,
  zIndex,
  onFocus,
  initialOffset,
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  const skillsList = [
    { name: 'TypeScript / JavaScript', level: 'Advanced' },
    { name: 'React.js & Angular', level: 'Core Frameworks' },
    { name: 'Tailwind CSS & SCSS', level: 'Design Systems' },
    { name: 'REST APIs & Data Fetching', level: 'Integration' },
    { name: 'Data Structures & Algorithms', level: 'LeetCode Active' },
    { name: 'Git, GitHub & Version Control', level: 'Workflow' },
  ];

  return (
    <RetroWindow
      id="about"
      path="C:\DINESH\about.me"
      title="About Dinesh Kumar"
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
      maxWidth="max-w-4xl"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        {/* Left Column: Avatar & Quick Info Card */}
        <div className="flex flex-col items-center flex-shrink-0 space-y-3">
          {/* Avatar with retro code frame */}
          <div className="relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-3 border-[#2c3327] bg-[#e8e2d4] shadow-retro flex flex-col items-center justify-center relative">
              <div className="w-full h-8 bg-[#5c6753] border-b-2 border-[#2c3327] flex items-center px-2 gap-1.5 absolute top-0 left-0">
                <span className="w-2 h-2 rounded-full bg-[#e27373] border border-[#2c3327]" />
                <span className="w-2 h-2 rounded-full bg-[#f4cf65] border border-[#2c3327]" />
                <span className="w-2 h-2 rounded-full bg-[#6bb7e9] border border-[#2c3327]" />
                <span className="text-[10px] font-mono text-[#d2d8cb] ml-auto">dev.ts</span>
              </div>
              <div className="pt-6 text-center">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#2c3327] tracking-tighter">
                  &lt;DK /&gt;
                </span>
                <p className="text-[10px] font-mono font-bold text-[#c77843] uppercase tracking-wider mt-1">
                  FULL-STACK DEV
                </p>
              </div>
            </div>

            {/* Availability status badge */}
            <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 bg-[#2c3327] text-white text-[10px] font-mono font-bold px-3 py-0.5 rounded-full border border-[#f4cf65] shadow-retro-sm whitespace-nowrap flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN TO WORK</span>
            </div>
          </div>

          {/* Contact pill list */}
          <div className="w-full pt-3 space-y-1.5 text-xs font-mono text-[#4a5241] text-center">
            <div className="px-2.5 py-1 bg-[#f4efe4] rounded-lg border border-[#d2c9b8] flex items-center justify-center gap-1.5">
              <span>📍</span>
              <span>Chennai, India</span>
            </div>
            <div className="px-2.5 py-1 bg-[#f4efe4] rounded-lg border border-[#d2c9b8] flex items-center justify-center gap-1.5">
              <span>🎓</span>
              <span>B.E. Computer Science</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Tabs, Content */}
        <div className="flex-1 text-center md:text-left space-y-4 w-full">
          {/* Header Title & Specialization */}
          <div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-[#f4cf65] text-[#2c3327] border border-[#2c3327]">
                PROFILE // DEV-033
              </span>
              <span className="text-xs font-mono text-[#616858] font-semibold">
                Chennai, Tamil Nadu
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2c3327] tracking-tight leading-tight">
              Dinesh Kumar
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#c77843] uppercase mt-0.5">
              Full-Stack Developer • Software Engineer • UI/UX Specialist
            </p>
          </div>

          {/* Professional Narrative / Summary */}
          <div className="p-3.5 sm:p-4 bg-[#faf7f0] rounded-xl border-2 border-[#2c3327] shadow-retro-sm text-left space-y-2">
            <p className="text-xs sm:text-sm text-[#3d4436] leading-relaxed">
              Hi, I'm <strong className="text-[#2c3327] font-bold">Dinesh</strong>, a passionate Software Developer with <strong className="text-[#c77843] font-bold">1+ year of hands-on experience</strong> in building modern, scalable web applications.
            </p>
            <p className="text-xs sm:text-sm text-[#4a5241] leading-relaxed">
              I specialize in frontend and full-stack development using <strong className="text-[#2c3327]">TypeScript, JavaScript (ES6+), React.js, and Angular</strong>, focusing on responsive UI/UX and seamless REST API integrations.
            </p>
            <p className="text-xs sm:text-sm text-[#4a5241] leading-relaxed">
              My practical experience spans developing full-featured e-commerce systems, API data interaction engines, and component-driven interfaces with <strong className="text-[#2c3327]">Tailwind CSS and SCSS</strong>.
            </p>
            <p className="text-xs sm:text-sm text-[#4a5241] leading-relaxed">
              Beyond engineering, I actively solve Data Structures and Algorithmic problems on <strong className="text-[#c77843]">LeetCode</strong> to maintain strong analytical skills. I am committed to clean code, performance optimization, and continuous learning.
            </p>
          </div>

          {/* Interactive Profile Tabs */}
          <div className="flex border-b-2 border-[#2c3327] gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                setActiveTab('overview');
              }}
              className={`px-3 py-1 font-mono text-xs font-bold rounded-t-lg border-t-2 border-x-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#5c6753] text-white border-[#2c3327] translate-y-[2px]'
                  : 'bg-[#ede6d8] text-[#555d4d] border-transparent hover:bg-[#e2d9c8]'
              }`}
            >
              Key Competencies
            </button>
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                setActiveTab('stats');
              }}
              className={`px-3 py-1 font-mono text-xs font-bold rounded-t-lg border-t-2 border-x-2 transition-all cursor-pointer ${
                activeTab === 'stats'
                  ? 'bg-[#5c6753] text-white border-[#2c3327] translate-y-[2px]'
                  : 'bg-[#ede6d8] text-[#555d4d] border-transparent hover:bg-[#e2d9c8]'
              }`}
            >
              Coding & Problem Solving
            </button>
          </div>

          {/* Tab 1: Key Competencies Grid */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 animate-pop-in">
              {skillsList.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 bg-[#fcfaf5] rounded-xl border border-[#2c3327] shadow-retro-sm text-left"
                >
                  <p className="font-mono text-xs font-bold text-[#2c3327] truncate">
                    {skill.name}
                  </p>
                  <p className="text-[10px] font-mono text-[#c77843] font-semibold mt-0.5">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Coding & Problem Solving */}
          {activeTab === 'stats' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 animate-pop-in text-left">
              <div className="p-3 bg-[#fdfcf9] rounded-xl border-2 border-[#2c3327] shadow-retro-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-[#2c3327] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFA116]" />
                    LeetCode Profile
                  </span>
                  <span className="text-[10px] font-mono text-[#5c6753]">@DINESHKUAMR-11</span>
                </div>
                <p className="text-xs text-[#525a49]">
                  Consistent problem solving focusing on Arrays, Strings, Two Pointers, and Dynamic Programming algorithms.
                </p>
              </div>

              <div className="p-3 bg-[#fdfcf9] rounded-xl border-2 border-[#2c3327] shadow-retro-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-[#2c3327] flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#24292E]" />
                    GitHub Open Source
                  </span>
                  <span className="text-[10px] font-mono text-[#5c6753]">@dineshCoder033</span>
                </div>
                <p className="text-xs text-[#525a49]">
                  Repositories featuring full-stack e-commerce systems, API consumption, calculators, and responsive design prototypes.
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons Row */}
          <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                onOpenWindow('techstack');
              }}
              className="px-3.5 py-2 bg-[#f4cf65] hover:bg-[#eac04d] active:translate-y-0.5 text-[#2c3327] font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>⚡ Tech Stack & Tools</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                onOpenWindow('work');
              }}
              className="px-3.5 py-2 bg-[#faf6ee] hover:bg-[#eae3d2] active:translate-y-0.5 text-[#2c3327] font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer"
            >
              📁 Experience
            </button>
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                onOpenWindow('project');
              }}
              className="px-3.5 py-2 bg-[#6bb7e9] hover:bg-[#52a6df] active:translate-y-0.5 text-[#2c3327] font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer"
            >
              💻 Projects
            </button>
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                onOpenWindow('contact');
              }}
              className="px-3.5 py-2 bg-[#5c6753] hover:bg-[#4d5745] active:translate-y-0.5 text-white font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer"
            >
              ✉️ Contact
            </button>
          </div>

          {/* Official Resume Action Button */}
          <div className="pt-2 border-t-2 border-dashed border-[#d4cbba]">
            <button
              type="button"
              onClick={() => {
                playFolderClick();
                onOpenWindow('resume');
              }}
              className="w-full py-2.5 px-4 bg-[#c77843] hover:bg-[#b56936] active:translate-y-0.5 text-white font-mono text-xs sm:text-sm font-bold rounded-xl border-2 border-[#2c3327] shadow-retro flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>📄 VIEW OFFICIAL RESUME (GOOGLE DRIVE PDF)</span>
              <span className="text-[11px] bg-[#2c3327] text-white px-2 py-0.5 rounded-md font-mono border border-white/20">
                Live Preview & Download ↗
              </span>
            </button>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
};
