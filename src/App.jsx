import React, { useState } from 'react';
import { FolderIcon } from './components/FolderIcon';
import { SocialDock } from './components/SocialDock';
import { AboutWindow } from './components/windows/AboutWindow';
import { TechStackWindow } from './components/windows/TechStackWindow';
import { WorkWindow } from './components/windows/WorkWindow';
import { ProjectWindow } from './components/windows/ProjectWindow';
import { ContactWindow } from './components/windows/ContactWindow';
import { ResumeWindow } from './components/windows/ResumeWindow';
import { CertificateWindow } from './components/windows/CertificateWindow';
import { playWindowOpen, playWindowClose } from './utils/sound';

export default function App() {
  // Support multiple independent open windows
  const [openWindows, setOpenWindows] = useState({
    about: false,
    techstack: false,
    work: false,
    project: false,
    contact: false,
    resume: false,
    certificate: false,
  });

  // Track active certificate to display in CertificateWindow
  const [activeCertKey, setActiveCertKey] = useState('gomath');

  // Track z-indices to bring clicked/focused window to front
  const [topZ, setTopZ] = useState(60);
  const [zIndices, setZIndices] = useState({
    about: 50,
    techstack: 52,
    work: 50,
    project: 50,
    contact: 50,
    resume: 55,
    certificate: 56,
  });

  const focusWindow = (id) => {
    setTopZ((prev) => {
      const nextZ = prev + 1;
      setZIndices((zPrev) => ({ ...zPrev, [id]: nextZ }));
      return nextZ;
    });
  };

  const openWindow = (id) => {
    playWindowOpen();
    setOpenWindows((prev) => ({ ...prev, [id]: true }));
    focusWindow(id);
  };

  const openCertificate = (certKey) => {
    if (certKey) {
      setActiveCertKey(certKey);
    }
    openWindow('certificate');
  };

  const closeWindow = (id) => {
    playWindowClose();
    setOpenWindows((prev) => ({ ...prev, [id]: false }));
  };

  const toggleWindow = (id) => {
    if (openWindows[id]) {
      closeWindow(id);
    } else {
      openWindow(id);
    }
  };

  // If any window is open, show subtle backdrop that doesn't block dragging
  const hasOpenWindows = Object.values(openWindows).some(Boolean);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-grid-pattern relative overflow-x-hidden select-none">
      {/* Desktop Workspace matching reference layout */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 py-6 sm:py-10 flex flex-col justify-center">
        {/* Desktop Layout Grid */}
        <div className="grid grid-cols-12 items-center min-h-[65vh] sm:min-h-[72vh]">
          {/* Left Column Folders: About (top), Work (bottom) */}
          <div className="col-span-3 sm:col-span-2 flex flex-col items-center sm:items-start justify-between h-[340px] sm:h-[420px] my-auto">
            {/* 1. About Folder (Top) */}
            <FolderIcon
              id="about"
              label="about"
              type="folder"
              isOpen={openWindows.about}
              isActive={openWindows.about}
              onClick={toggleWindow}
            />

            {/* 2. Work Folder (Bottom) */}
            <FolderIcon
              id="work"
              label="work"
              type="folder"
              isOpen={openWindows.work}
              isActive={openWindows.work}
              onClick={toggleWindow}
            />
          </div>

          {/* Center Column: Big DINESH Title, Subtitle & Tech Stack Folder on the exact same bottom line */}
          <div className="col-span-6 sm:col-span-8 flex flex-col items-center justify-between h-[340px] sm:h-[420px] my-auto text-center">
            {/* Title & Subtitle in the upper/middle area */}
            <div className="my-auto flex flex-col items-center justify-center pt-2 sm:pt-4">
              <h1 className="font-sans font-light tracking-[0.24em] sm:tracking-[0.32em] md:tracking-[0.40em] text-4xl sm:text-6xl md:text-8xl text-[#6b7362] uppercase leading-none transition-all duration-300 hover:scale-[1.02] cursor-default">
                DINESH
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#7e8775] tracking-[0.25em] sm:tracking-[0.3em] uppercase mt-3 sm:mt-4 font-semibold">
                SOFTWARE DEVELOPER & WEB DESIGNER
              </p>
            </div>

            {/* 3. Tech Stack & Tools Folder (Aligned on the EXACT same bottom line as work & contact) */}
            <div className="flex flex-col items-center">
              <FolderIcon
                id="techstack"
                label="tech stack"
                type="folder"
                isOpen={openWindows.techstack}
                isActive={openWindows.techstack}
                onClick={toggleWindow}
                badge="TOOLS"
              />
            </div>
          </div>

          {/* Right Column Folders: Project (top), Contact (bottom) */}
          <div className="col-span-3 sm:col-span-2 flex flex-col items-center sm:items-end justify-between h-[340px] sm:h-[420px] my-auto">
            {/* 4. Project Folder (Top) */}
            <FolderIcon
              id="project"
              label="project"
              type="folder"
              isOpen={openWindows.project}
              isActive={openWindows.project}
              onClick={toggleWindow}
            />

            {/* 5. Contact Folder (Bottom) */}
            <FolderIcon
              id="contact"
              label="contact"
              type="folder"
              isOpen={openWindows.contact}
              isActive={openWindows.contact}
              onClick={toggleWindow}
            />
          </div>
        </div>
      </main>

      {/* Bottom Horizontal Olive Green Bar with 6 Social Icons */}
      <footer className="w-full bg-[#5f6d57] border-t-[3px] border-[#2c3327] py-3.5 sm:py-4 px-4 flex items-center justify-center shadow-retro z-30">
        <SocialDock />
      </footer>

      {/* Subtle backdrop when windows are open */}
      {hasOpenWindows && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1.5px] transition-opacity duration-200"
          onClick={() => {
            // Click backdrop
          }}
        />
      )}

      {/* ======================================================== */}
      {/* SEPARATE DRAGGABLE WINDOWS                               */}
      {/* ======================================================== */}

      {/* 1. About Window */}
      <AboutWindow
        isOpen={openWindows.about}
        onClose={closeWindow}
        onOpenWindow={openWindow}
        zIndex={zIndices.about}
        onFocus={focusWindow}
        initialOffset={{ x: 0, y: 0 }}
      />

      {/* 2. Tech Stack & Tools Window */}
      <TechStackWindow
        isOpen={openWindows.techstack}
        onClose={closeWindow}
        zIndex={zIndices.techstack}
        onFocus={focusWindow}
        initialOffset={{ x: 0, y: 0 }}
      />

      {/* 3. Work Window */}
      <WorkWindow
        isOpen={openWindows.work}
        onClose={closeWindow}
        onOpenWindow={openWindow}
        onOpenCertificate={openCertificate}
        zIndex={zIndices.work}
        onFocus={focusWindow}
        initialOffset={{ x: 0, y: 0 }}
      />

      {/* 4. Project Window */}
      <ProjectWindow
        isOpen={openWindows.project}
        onClose={closeWindow}
        zIndex={zIndices.project}
        onFocus={focusWindow}
        initialOffset={{ x: 0, y: 0 }}
      />

      {/* 5. Contact Window */}
      <ContactWindow
        isOpen={openWindows.contact}
        onClose={closeWindow}
        zIndex={zIndices.contact}
        onFocus={focusWindow}
        initialOffset={{ x: 0, y: 0 }}
      />

      {/* 6. Resume Window (Opened from About button) */}
      <ResumeWindow
        isOpen={openWindows.resume}
        onClose={closeWindow}
        zIndex={zIndices.resume}
        onFocus={focusWindow}
        initialOffset={{ x: 20, y: 20 }}
      />

      {/* 7. Experience Certificate Window (Opened from Work card buttons) */}
      <CertificateWindow
        isOpen={openWindows.certificate}
        onClose={closeWindow}
        zIndex={zIndices.certificate}
        onFocus={focusWindow}
        activeKey={activeCertKey}
        onChangeKey={setActiveCertKey}
        initialOffset={{ x: 25, y: 25 }}
      />
    </div>
  );
}
