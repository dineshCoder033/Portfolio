import React, { useState, useEffect } from 'react';
import { toggleSound, isSoundEnabled, playFolderClick } from '../utils/sound';

export const DesktopTaskbar = ({ openWindows, activeWindow, onToggleWindow }) => {
  const [time, setTime] = useState('');
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'project', label: 'Project' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#f4efe4]/95 backdrop-blur-md border-t-2 border-[#2c3327] px-3 sm:px-6 py-2 flex items-center justify-between shadow-retro">
      {/* Start button / Branding */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            playFolderClick();
            onToggleWindow('about');
          }}
          className="flex items-center gap-2 px-3 py-1 bg-[#5c6753] hover:bg-[#4a5443] text-white rounded-lg border-2 border-[#2c3327] font-mono text-xs font-bold shadow-retro-sm transition-all cursor-pointer active:translate-y-0.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#f4cf65] border border-[#2c3327]" />
          <span>START</span>
        </button>

        {/* Running Window Tabs on Taskbar */}
        <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l-2 border-[#d2d8cb]">
          {navItems.map((item) => {
            const isOpen = openWindows[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  playFolderClick();
                  onToggleWindow(item.id);
                }}
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border transition-all cursor-pointer ${
                  isOpen
                    ? 'bg-[#faf6ee] text-[#2c3327] border-[#2c3327] shadow-retro-sm'
                    : 'text-[#6b7364] border-transparent hover:bg-[#e8e2d4]'
                }`}
              >
                {isOpen ? '● ' : ''}
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right side: Sound toggle & Live Clock */}
      <div className="flex items-center gap-3">
        {/* Sound toggle button */}
        <button
          type="button"
          onClick={handleSoundToggle}
          className="px-2 py-1 bg-[#e8e2d4] hover:bg-white text-[#2c3327] rounded-md border border-[#2c3327] text-xs font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
          title={soundOn ? 'Sound FX Enabled (Click to Mute)' : 'Sound Muted (Click to Unmute)'}
        >
          <span>{soundOn ? '🔊' : '🔇'}</span>
          <span className="hidden md:inline text-[11px]">{soundOn ? 'FX ON' : 'MUTED'}</span>
        </button>

        {/* Digital Clock */}
        <div className="px-2.5 py-1 bg-[#faf7f0] rounded-md border-2 border-[#2c3327] font-mono text-xs font-bold text-[#2c3327] shadow-retro-sm min-w-[70px] text-center">
          {time || '12:00 PM'}
        </div>
      </div>
    </footer>
  );
};
