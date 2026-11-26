import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';
import {
  ToolIconJavaScript,
  ToolIconTypeScript,
  ToolIconReact,
  ToolIconNodeJS,
  ToolIconExpress,
  ToolIconMongoDB,
  ToolIconSQL,
  ToolIconFlutter,
  ToolIconRestAPI,
  ToolIconTailwind,
  ToolIconMUI,
  ToolIconGSAP,
  ToolIconVSCode,
  ToolIconGitHubBadge,
  ToolIconFirebase,
  ToolIconAndroidStudio,
  ToolIconVercel,
  ToolIconRender,
  ToolIconPostman,
  ToolIconThunderClient,
  ToolIconPlaywright,
  ToolIconFigma,
  ToolIconFramer,
  ToolIconCanva,
  ToolIconStitch,
  ToolIconAntigravity,
  ToolIconClaude,
  ToolIconChatGPT,
  ToolIconGemini,
} from '../Icons';

export const TechStackWindow = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
  initialOffset,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const languagesAndCore = [
    { name: 'JavaScript', desc: 'ES6+ & Async', icon: <ToolIconJavaScript />, category: 'Core' },
    { name: 'TypeScript', desc: 'Type-Safe Architecture', icon: <ToolIconTypeScript />, category: 'Core' },
    { name: 'SQL', desc: 'Relational DB Queries', icon: <ToolIconSQL />, category: 'Core' },
  ];

  const frontendAndMobile = [
    { name: 'React.js', desc: 'Component Architecture', icon: <ToolIconReact />, category: 'Frontend' },
    { name: 'Flutter', desc: 'Cross-Platform Mobile', icon: <ToolIconFlutter />, category: 'Frontend' },
    { name: 'Tailwind CSS', desc: 'Utility Design System', icon: <ToolIconTailwind />, category: 'Frontend' },
    { name: 'MUI', desc: 'Material UI Library', icon: <ToolIconMUI />, category: 'Frontend' },
    { name: 'GSAP', desc: 'Advanced Animations', icon: <ToolIconGSAP />, category: 'Frontend' },
  ];

  const backendAndDatabase = [
    { name: 'Node.js', desc: 'Backend Runtime', icon: <ToolIconNodeJS />, category: 'Backend' },
    { name: 'Express.js', desc: 'Server & Routing Framework', icon: <ToolIconExpress />, category: 'Backend' },
    { name: 'MongoDB', desc: 'NoSQL Database', icon: <ToolIconMongoDB />, category: 'Backend' },
    { name: 'REST API', desc: 'Endpoint Integrations', icon: <ToolIconRestAPI />, category: 'Backend' },
  ];

  const softwareTools = [
    { name: 'VS Code', desc: 'Primary IDE', icon: <ToolIconVSCode />, category: 'Software' },
    { name: 'GitHub', desc: 'Version Control', icon: <ToolIconGitHubBadge />, category: 'Software' },
    { name: 'Firebase', desc: 'Realtime Backend', icon: <ToolIconFirebase />, category: 'Software' },
    { name: 'Android Studio', desc: 'Mobile Development', icon: <ToolIconAndroidStudio />, category: 'Software' },
    { name: 'Vercel', desc: 'Edge Deployment', icon: <ToolIconVercel />, category: 'Software' },
    { name: 'Render', desc: 'Cloud Web Services', icon: <ToolIconRender />, category: 'Software' },
    { name: 'Postman', desc: 'API Testing & Docs', icon: <ToolIconPostman />, category: 'Software' },
    { name: 'Thunder Client', desc: 'VS Code API Client', icon: <ToolIconThunderClient />, category: 'Software' },
    { name: 'Playwright', desc: 'E2E Testing & Automation', icon: <ToolIconPlaywright />, category: 'Software' },
  ];

  const designingTools = [
    { name: 'Figma', desc: 'UI/UX & Components', icon: <ToolIconFigma />, category: 'Designing' },
    { name: 'Framer', desc: 'Interactive Prototypes', icon: <ToolIconFramer />, category: 'Designing' },
    { name: 'Canva', desc: 'Visual Brand Media', icon: <ToolIconCanva />, category: 'Designing' },
    { name: 'Stitch', desc: 'UI Layout System', icon: <ToolIconStitch />, category: 'Designing' },
  ];

  const aiTools = [
    { name: 'Antigravity', desc: 'Agentic DeepMind IDE', icon: <ToolIconAntigravity />, category: 'AI' },
    { name: 'Claude', desc: 'Anthropic Reasoning', icon: <ToolIconClaude />, category: 'AI' },
    { name: 'ChatGPT', desc: 'OpenAI Assistive Tech', icon: <ToolIconChatGPT />, category: 'AI' },
    { name: 'Gemini', desc: 'Multimodal Intelligence', icon: <ToolIconGemini />, category: 'AI' },
  ];

  const filterTabs = [
    { id: 'All', label: 'All Stack', count: 29 },
    { id: 'Core', label: 'Languages', count: 3 },
    { id: 'Frontend', label: 'Frontend & Mobile', count: 5 },
    { id: 'Backend', label: 'Backend & DB', count: 4 },
    { id: 'Software', label: 'Dev Tools', count: 9 },
    { id: 'Designing', label: 'Design Tools', count: 4 },
    { id: 'AI', label: 'AI Tools', count: 4 },
  ];

  const renderToolItem = (tool) => (
    <div
      key={tool.name}
      className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-[#faf6ee] hover:bg-[#f1ebdc] border-2 border-[#2c3327] shadow-retro-sm transition-all duration-200 hover:-translate-y-1 w-full max-w-[125px] cursor-pointer"
      title={`${tool.name} - ${tool.desc}`}
    >
      <div className="transition-transform duration-200 group-hover:scale-110">
        {tool.icon}
      </div>
      <span className="mt-2 text-xs font-mono font-bold text-[#2c3327] text-center leading-tight truncate w-full">
        {tool.name}
      </span>
      <span className="text-[10px] font-mono text-[#c77843] truncate w-full text-center mt-0.5">
        {tool.desc}
      </span>
    </div>
  );

  return (
    <RetroWindow
      id="techstack"
      path="C:\DINESH\techstack"
      title="Tools & Tech Stack"
      isOpen={isOpen}
      onClose={onClose}
      accentTab={true}
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
      maxWidth="max-w-4xl lg:max-w-5xl"
    >
      <div className="space-y-6">
        {/* Header Title & Subtitle */}
        <div className="text-center">
          <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-[#353c2f] uppercase">
            TOOLS & TECH STACK
          </h2>
          <div className="w-12 h-1 bg-[#c77843] mx-auto mt-1 rounded-full" />
          <p className="text-xs font-mono text-[#616858] mt-1.5">
            Full-Stack technologies, engineering toolchain, design systems, and AI workflows
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 border-b-2 border-dashed border-[#d4cbba] pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                playFolderClick();
                setActiveCategory(tab.id);
              }}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xl border-2 border-[#2c3327] transition-all cursor-pointer flex items-center gap-1.5 ${
                activeCategory === tab.id
                  ? 'bg-[#c77843] text-white shadow-retro-sm translate-y-[-1px]'
                  : 'bg-[#faf6ee] text-[#4d5345] hover:bg-[#eae3d2]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeCategory === tab.id ? 'bg-[#2c3327] text-white' : 'bg-[#e2d9c8] text-[#2c3327]'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Categorized Tool Cards Display */}
        <div className="space-y-5">
          {/* 1. Programming Languages & Core */}
          {(activeCategory === 'All' || activeCategory === 'Core') && (
            <div className="p-4 bg-[#fcfaf6] rounded-2xl border-2 border-[#2c3327] shadow-retro-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#e2d9c8] pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F7DF1E] border border-[#2c3327]" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                  LANGUAGES & CORE FOUNDATIONS
                </h3>
                <span className="text-[11px] font-mono text-[#616858] ml-auto">
                  (3 Technologies)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 justify-items-center">
                {languagesAndCore.map(renderToolItem)}
              </div>
            </div>
          )}

          {/* 2. Frontend & Mobile Frameworks */}
          {(activeCategory === 'All' || activeCategory === 'Frontend') && (
            <div className="p-4 bg-[#fcfaf6] rounded-2xl border-2 border-[#2c3327] shadow-retro-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#e2d9c8] pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#61DAFB] border border-[#2c3327]" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                  FRONTEND, MOBILE & ANIMATION
                </h3>
                <span className="text-[11px] font-mono text-[#616858] ml-auto">
                  (5 Frameworks / Libraries)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
                {frontendAndMobile.map(renderToolItem)}
              </div>
            </div>
          )}

          {/* 3. Backend, Database & APIs */}
          {(activeCategory === 'All' || activeCategory === 'Backend') && (
            <div className="p-4 bg-[#fcfaf6] rounded-2xl border-2 border-[#2c3327] shadow-retro-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#e2d9c8] pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#339933] border border-[#2c3327]" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                  BACKEND, DATABASE & REST APIS
                </h3>
                <span className="text-[11px] font-mono text-[#616858] ml-auto">
                  (4 Technologies)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 justify-items-center">
                {backendAndDatabase.map(renderToolItem)}
              </div>
            </div>
          )}

          {/* 4. Software & Dev Tools */}
          {(activeCategory === 'All' || activeCategory === 'Software') && (
            <div className="p-4 bg-[#fcfaf6] rounded-2xl border-2 border-[#2c3327] shadow-retro-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#e2d9c8] pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#007ACC] border border-[#2c3327]" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                  SOFTWARE & DEV ENVIRONMENT TOOLS
                </h3>
                <span className="text-[11px] font-mono text-[#616858] ml-auto">
                  (9 Tools)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
                {softwareTools.map(renderToolItem)}
              </div>
            </div>
          )}

          {/* 5. Designing Tools */}
          {(activeCategory === 'All' || activeCategory === 'Designing') && (
            <div className="p-4 bg-[#fcfaf6] rounded-2xl border-2 border-[#2c3327] shadow-retro-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#e2d9c8] pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F24E1E] border border-[#2c3327]" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                  DESIGNING & PROTOTYPING
                </h3>
                <span className="text-[11px] font-mono text-[#616858] ml-auto">
                  (4 Tools)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 justify-items-center">
                {designingTools.map(renderToolItem)}
              </div>
            </div>
          )}

          {/* 6. AI Tools */}
          {(activeCategory === 'All' || activeCategory === 'AI') && (
            <div className="p-4 bg-[#fcfaf6] rounded-2xl border-2 border-[#2c3327] shadow-retro-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#e2d9c8] pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10A37F] border border-[#2c3327]" />
                <h3 className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                  AI WORKFLOW TOOLS
                </h3>
                <span className="text-[11px] font-mono text-[#616858] ml-auto">
                  (4 Tools)
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 justify-items-center">
                {aiTools.map(renderToolItem)}
              </div>
            </div>
          )}
        </div>
      </div>
    </RetroWindow>
  );
};
