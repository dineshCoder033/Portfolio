import React, { useEffect, useRef, useState } from 'react';

const PORI_COLORS = ['#c77843', '#f4cf65', '#5f6d57', '#e27373', '#2c3327'];

export const SparkleCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const outerRingRef = useRef(null);

  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const outerRingPosRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef([]);
  const shockwavesRef = useRef([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    // Only enable on desktop / fine-pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    setEnabled(true);

    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const spawnPori = (x, y, count = 4, isBurst = false) => {
      // Cap total active particles to keep 60fps silky smooth
      if (particlesRef.current.length > 180) {
        particlesRef.current.splice(0, count);
      }

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst ? 2.2 + Math.random() * 4.5 : 0.7 + Math.random() * 2.1;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isBurst ? 0.9 : 0.6),
          size: isBurst ? 3.5 + Math.random() * 3.5 : 2.5 + Math.random() * 2.8,
          color: PORI_COLORS[Math.floor(Math.random() * PORI_COLORS.length)],
          alpha: 1,
          decay: isBurst ? 0.018 : 0.025,
          gravity: isBurst ? 0.075 : 0.06,
          isStar: Math.random() > 0.42,
        });
      }
    };

    const isInteractiveTarget = (target) => {
      if (!target || typeof target.closest !== 'function') return false;
      return Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        )
      );
    };

    const handleMouseMove = (e) => {
      // Hide custom cursor when hovering over external iframes (e.g. Google Drive PDF viewer)
      if (e.target && e.target.tagName === 'IFRAME') {
        setVisible(false);
        return;
      }

      setVisible(true);
      const x = e.clientX;
      const y = e.clientY;
      mouseRef.current = { x, y };

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      setIsHovering(isInteractiveTarget(e.target));

      const now = Date.now();
      if (now - lastSpawnRef.current > 16) {
        lastSpawnRef.current = now;
        spawnPori(x, y, 4, false);
      }
    };

    const handleMouseDown = (e) => {
      if (e.target && e.target.tagName === 'IFRAME') return;
      setIsClicking(true);
      const x = e.clientX;
      const y = e.clientY;

      // Extra rich pori pori burst + double concentric shockwave ripples
      spawnPori(x, y, 24, true);
      shockwavesRef.current.push(
        {
          x,
          y,
          radius: 6,
          maxRadius: 42,
          alpha: 0.9,
          color: '#c77843',
        },
        {
          x,
          y,
          radius: 3,
          maxRadius: 28,
          alpha: 0.85,
          color: '#f4cf65',
        }
      );
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    let rafId;
    const animate = () => {
      // 1. Dual elastic spring lag for inner & outer circles
      const target = mouseRef.current;
      const ring = ringPosRef.current;
      ring.x += (target.x - ring.x) * 0.22;
      ring.y += (target.y - ring.y) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.x}px`;
        ringRef.current.style.top = `${ring.y}px`;
      }

      const outerRing = outerRingPosRef.current;
      outerRing.x += (target.x - outerRing.x) * 0.11;
      outerRing.y += (target.y - outerRing.y) * 0.11;

      if (outerRingRef.current) {
        outerRingRef.current.style.left = `${outerRing.x}px`;
        outerRingRef.current.style.top = `${outerRing.y}px`;
      }

      // 2. Render pori particles & click shockwaves on canvas
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update & draw shockwaves
        const waves = shockwavesRef.current;
        for (let i = waves.length - 1; i >= 0; i--) {
          const w = waves[i];
          w.radius += (w.maxRadius - w.radius) * 0.18;
          w.alpha -= 0.045;
          if (w.alpha <= 0) {
            waves.splice(i, 1);
            continue;
          }
          ctx.save();
          ctx.globalAlpha = Math.max(0, w.alpha);
          ctx.strokeStyle = w.color || '#c77843';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // Update & draw pori sparkles
        const list = particlesRef.current;
        for (let i = list.length - 1; i >= 0; i--) {
          const p = list[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            list.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;

          if (p.isStar) {
            ctx.fillRect(p.x - p.size, p.y - 0.8, p.size * 2, 1.6);
            ctx.fillRect(p.x - 0.8, p.y - p.size, 1.6, p.size * 2);
          } else {
            ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
          }
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Fullscreen Canvas for Pori Pori Sparkles & Click Shockwaves */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        aria-hidden="true"
      />

      {/* Elastic Spring Ring + Inner Dot Cursor */}
      <div
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-150 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {/* Crisp Inner Dot */}
        <div
          ref={dotRef}
          className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2c3327] transition-transform duration-100 ${
            isClicking ? 'w-2 h-2 scale-75 bg-[#c77843]' : 'w-2.5 h-2.5'
          }`}
          style={{ left: -100, top: -100 }}
        />

        {/* Elastic Circle 1 (Inner Terracotta Ring) */}
        <div
          ref={ringRef}
          className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c77843] flex items-center justify-center transition-[width,height,background-color] duration-150 ${
            isHovering
              ? 'w-12 h-12 bg-[#f4cf65]/20'
              : isClicking
              ? 'w-6 h-6 bg-[#c77843]/15'
              : 'w-8 h-8 bg-transparent'
          }`}
          style={{ left: -100, top: -100 }}
        >
          {/* Spinning dashed ring shown on hover */}
          <div
            className={`w-full h-full rounded-full border border-dashed border-[#5f6d57] animate-spin-slow transition-opacity duration-150 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Elastic Circle 2 (Extra Outer Trailing Sage Ring) */}
        <div
          ref={outerRingRef}
          className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5f6d57]/70 transition-[width,height,border-color] duration-200 ${
            isHovering
              ? 'w-16 h-16 border-dashed border-2 border-[#c77843]/80 animate-spin-slow'
              : isClicking
              ? 'w-10 h-10 border-[#c77843]'
              : 'w-12 h-12'
          }`}
          style={{ left: -100, top: -100 }}
        />
      </div>
    </>
  );
};
