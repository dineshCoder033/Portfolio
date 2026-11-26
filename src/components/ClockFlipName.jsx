import React, { useEffect, useRef, useState, useCallback } from 'react';
import { playFolderClick } from '../utils/sound';

const TARGET_NAME = 'DINESH';
const CLOCK_DIGITS = '0123456789';

export const ClockFlipName = () => {
  const [chars, setChars] = useState(TARGET_NAME.split(''));
  const [lockedCount, setLockedCount] = useState(TARGET_NAME.length);
  const [tickKeys, setTickKeys] = useState([0, 0, 0, 0, 0, 0]);
  const intervalRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const runClockAnimation = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    if (intervalRef.current) clearInterval(intervalRef.current);

    let step = 0;
    const totalStepsPerChar = 5; // Each letter ticks through 5 numbers before locking
    setLockedCount(0);

    intervalRef.current = setInterval(() => {
      step += 1;
      const currentLocked = Math.floor(step / totalStepsPerChar);

      setChars(
        TARGET_NAME.split('').map((targetChar, idx) => {
          if (idx < currentLocked) {
            return targetChar;
          }
          // Cycle through numbers 0-9 like a digital/mechanical number clock
          return CLOCK_DIGITS[Math.floor(Math.random() * CLOCK_DIGITS.length)];
        })
      );

      setLockedCount(currentLocked);
      setTickKeys((prev) =>
        prev.map((k, idx) => (idx >= currentLocked ? k + 1 : k))
      );

      if (currentLocked >= TARGET_NAME.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setChars(TARGET_NAME.split(''));
        setLockedCount(TARGET_NAME.length);
        isAnimatingRef.current = false;
      }
    }, 55);
  }, []);

  useEffect(() => {
    // Run on initial mount
    const initialTimer = setTimeout(() => {
      runClockAnimation();
    }, 250);

    // Repeat automatically every 7.5 seconds like a living clock
    const loopTimer = setInterval(() => {
      runClockAnimation();
    }, 7500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [runClockAnimation]);

  return (
    <h1
      onMouseEnter={runClockAnimation}
      onClick={() => {
        playFolderClick();
        runClockAnimation();
      }}
      className="font-sans font-light text-4xl sm:text-6xl md:text-8xl text-[#6b7362] uppercase leading-none transition-transform duration-300 hover:scale-[1.02] cursor-pointer inline-flex items-center justify-center gap-[0.18em] sm:gap-[0.26em] md:gap-[0.34em] select-none"
      style={{ perspective: '600px' }}
      title="Click or hover to replay clock flip"
    >
      {chars.map((char, idx) => {
        const isTicking = idx >= lockedCount;
        return (
          <span
            key={`${idx}-${tickKeys[idx]}`}
            className={`inline-flex items-center justify-center w-[0.82em] text-center tabular-nums animate-clock-tick transition-colors duration-150 ${
              isTicking ? 'text-[#c77843]' : 'text-[#6b7362]'
            }`}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
};
