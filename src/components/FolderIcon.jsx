import React from 'react';
import { ProfileAppIcon, RetroFolderIcon } from './Icons';
import { playFolderClick } from '../utils/sound';

export const FolderIcon = ({
  id,
  label,
  type = 'folder',
  isOpen = false,
  isActive = false,
  onClick,
  badge = null,
}) => {
  const handleClick = () => {
    playFolderClick();
    if (onClick) onClick(id);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="group relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 select-none cursor-pointer"
      title={`Open ${label}`}
    >
      {/* Icon Graphic */}
      <div className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        {type === 'profile' ? (
          <ProfileAppIcon className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md" />
        ) : (
          <RetroFolderIcon className="w-14 h-12 sm:w-16 sm:h-14 drop-shadow-md" />
        )}

        {/* Indicator dot if window is open */}
        {isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border-2 border-white"></span>
          </span>
        )}

        {/* Optional small counter or badge */}
        {badge && (
          <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-terracotta text-white border border-[#2c3327]">
            {badge}
          </span>
        )}
      </div>

      {/* Label */}
      <span
        className={`mt-1.5 px-2 py-0.5 text-xs sm:text-sm font-mono font-semibold tracking-wide rounded-md transition-colors ${
          isActive
            ? 'bg-sage-600 text-white shadow-retro-sm'
            : 'text-[#3d4237] group-hover:bg-[#e4ddce]'
        }`}
      >
        {label}
      </span>
    </button>
  );
};
