import React, { useState, useEffect } from 'react';

export const FloatingGlyphs = () => {
  // Normalized mouse coordinates from -1 to +1
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Smoothly throttle with requestAnimationFrame
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        setMousePos({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Carefully placed glyphs in empty canvas space avoiding folder icons and title
  const glyphs = [
    {
      symbol: '{ }',
      left: '21%',
      top: '16%',
      depth: 22,
      anim: 'animate-glyph-1',
      delay: '0s',
      color: '#6c7761',
      size: 'text-2xl sm:text-3xl',
      opacity: 'opacity-25',
    },
    {
      symbol: '</>',
      left: '78%',
      top: '18%',
      depth: -25,
      anim: 'animate-glyph-2',
      delay: '1.2s',
      color: '#c77843',
      size: 'text-xl sm:text-2xl',
      opacity: 'opacity-25',
    },
    {
      symbol: '✦',
      left: '50%',
      top: '10%',
      depth: 14,
      anim: 'animate-glyph-3',
      delay: '2s',
      color: '#55604d',
      size: 'text-2xl sm:text-3xl',
      opacity: 'opacity-30',
    },
    {
      symbol: '// dev',
      left: '12%',
      top: '46%',
      depth: -18,
      anim: 'animate-glyph-1',
      delay: '1.8s',
      color: '#7b8571',
      size: 'text-xs sm:text-sm',
      opacity: 'opacity-25',
    },
    {
      symbol: '0101',
      left: '30%',
      top: '74%',
      depth: 26,
      anim: 'animate-glyph-2',
      delay: '3s',
      color: '#586350',
      size: 'text-xs sm:text-sm',
      opacity: 'opacity-25',
    },
    {
      symbol: '&&',
      left: '70%',
      top: '73%',
      depth: -22,
      anim: 'animate-glyph-1',
      delay: '0.6s',
      color: '#c77843',
      size: 'text-lg sm:text-xl',
      opacity: 'opacity-25',
    },
    {
      symbol: '★',
      left: '88%',
      top: '48%',
      depth: 18,
      anim: 'animate-glyph-3',
      delay: '2.5s',
      color: '#828c77',
      size: 'text-xl sm:text-2xl',
      opacity: 'opacity-20',
    },
    {
      symbol: '[ ]',
      left: '8%',
      top: '25%',
      depth: -15,
      anim: 'animate-glyph-2',
      delay: '3.5s',
      color: '#6f7964',
      size: 'text-lg sm:text-xl',
      opacity: 'opacity-20',
    },
    {
      symbol: 'git',
      left: '84%',
      top: '64%',
      depth: 20,
      anim: 'animate-glyph-1',
      delay: '1.4s',
      color: '#5b6653',
      size: 'text-xs',
      opacity: 'opacity-25',
    },
    {
      symbol: 'fn()',
      left: '65%',
      top: '12%',
      depth: -16,
      anim: 'animate-glyph-3',
      delay: '4s',
      color: '#c77843',
      size: 'text-xs sm:text-sm',
      opacity: 'opacity-25',
    },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {glyphs.map((item, idx) => (
        <div
          key={idx}
          className="absolute transition-transform duration-300 ease-out will-change-transform"
          style={{
            left: item.left,
            top: item.top,
            transform: `translate3d(${mousePos.x * item.depth}px, ${mousePos.y * item.depth}px, 0)`,
          }}
        >
          <div
            className={`${item.anim} ${item.size} ${item.opacity} font-mono font-bold tracking-wider`}
            style={{
              color: item.color,
              animationDelay: item.delay,
              textShadow: '0 1px 2px rgba(44, 51, 39, 0.08)',
            }}
          >
            {item.symbol}
          </div>
        </div>
      ))}

      {/* Tiny subtle 8-bit pixel dust dots in corners */}
      <div
        className="absolute w-1.5 h-1.5 bg-[#6b7560] opacity-20 animate-glyph-1"
        style={{
          left: '18%',
          top: '32%',
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
        }}
      />
      <div
        className="absolute w-2 h-2 bg-[#c77843] opacity-20 animate-glyph-2"
        style={{
          left: '74%',
          top: '38%',
          transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -14}px, 0)`,
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 bg-[#596451] opacity-20 animate-glyph-3"
        style={{
          left: '42%',
          top: '80%',
          transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)`,
        }}
      />
    </div>
  );
};
