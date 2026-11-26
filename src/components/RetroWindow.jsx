import React, { useState, useEffect, useRef } from 'react';
import { playWindowClose } from '../utils/sound';

export const RetroWindow = ({
  id,
  path = 'C:\\PORTFOLIO\\window',
  title = 'Window',
  isOpen = false,
  onClose,
  accentTab = null,
  maxWidth = 'max-w-3xl',
  zIndex = 50,
  initialOffset = { x: 0, y: 0 },
  onFocus,
  children,
}) => {
  // Draggable offset from dead-center { x, y }
  const [pos, setPos] = useState(initialOffset);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });

  // Reset or initialize position when window opens (always dead-center on mobile)
  useEffect(() => {
    if (isOpen) {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      setPos(isMobile ? { x: 0, y: 0 } : (initialOffset || { x: 0, y: 0 }));
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose(id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, id, onClose]);

  if (!isOpen) return null;

  const handleClose = (e) => {
    e?.stopPropagation();
    playWindowClose();
    if (onClose) onClose(id);
  };

  // Mouse drag handler on titlebar
  const handleMouseDown = (e) => {
    if (e.target.closest('button')) return;
    e.preventDefault();
    if (onFocus) onFocus(id);

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: pos.x,
      startPosY: pos.y,
    };
    setIsDragging(true);

    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      const dx = moveEvent.clientX - dragRef.current.startX;
      const dy = moveEvent.clientY - dragRef.current.startY;
      setPos({
        x: dragRef.current.startPosX + dx,
        y: dragRef.current.startPosY + dy,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Touch drag handler for mobile/tablet
  const handleTouchStart = (e) => {
    if (e.target.closest('button')) return;
    if (onFocus) onFocus(id);

    const touch = e.touches[0];
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      startPosX: pos.x,
      startPosY: pos.y,
    };
    setIsDragging(true);

    const handleTouchMove = (moveEvent) => {
      const moveTouch = moveEvent.touches[0];
      const dx = moveTouch.clientX - dragRef.current.startX;
      const dy = moveTouch.clientY - dragRef.current.startY;
      setPos({
        x: dragRef.current.startPosX + dx,
        y: dragRef.current.startPosY + dy,
      });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div
      onMouseDown={() => onFocus && onFocus(id)}
      style={{
        zIndex,
        position: 'fixed',
        top: `calc(50% + ${pos.y}px)`,
        left: `calc(50% + ${pos.x}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      className={`w-[94vw] sm:w-[92vw] lg:w-full ${maxWidth} max-h-[86vh] sm:max-h-[88vh] flex flex-col pointer-events-auto select-none`}
    >
      {/* Modal Dialog Window Container */}
      <div className="w-full h-full bg-[#fcfaf6] border-[2.5px] border-[#2c3327] rounded-2xl shadow-retro-xl overflow-hidden flex flex-col animate-pop-in">
        {/* Top Title Bar (Draggable Handle) */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="bg-[#5c6753] border-b-2 border-[#2c3327] px-3 sm:px-4 py-2.5 flex items-center justify-between select-none touch-none cursor-grab active:cursor-grabbing hover:brightness-105 transition-colors"
          title="Click and drag to move window"
        >
          {/* Path / Title in Monospace */}
          <div className="flex items-center gap-2 pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f4cf65] border border-[#2c3327]" />
            <span className="font-mono text-xs sm:text-sm font-bold text-[#fafaf7] tracking-wider truncate">
              {path}
            </span>
            <span className="text-[10px] font-mono text-[#d2d8cb] hidden sm:inline opacity-75 ml-2">
              (hold & drag to move)
            </span>
          </div>

          {/* Window Control Buttons */}
          <div className="flex items-center gap-2">
            {/* Close Button [x] */}
            <button
              type="button"
              onClick={handleClose}
              className="w-6 h-6 rounded flex items-center justify-center bg-[#e27373] hover:bg-[#d45d5d] active:scale-95 border border-[#2c3327] text-white text-xs font-mono font-bold leading-none cursor-pointer transition-all shadow-retro-sm"
              title="Close window"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Optional orange/peach accent strip */}
        {accentTab && (
          <div className="h-2 bg-[#e8a36c] border-b border-[#2c3327] w-full" />
        )}

        {/* Window Content with smooth scrolling */}
        <div className="p-3 sm:p-6 bg-[#fdfcf9] overflow-y-auto flex-1 flex flex-col select-text">
          {children}
        </div>
      </div>
    </div>
  );
};
