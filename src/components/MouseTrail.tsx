

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isReducedMotion) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      {/* Star SVG */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-70">
        <polygon 
          points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
          fill="yellow"
          stroke="gold"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
};

export default MouseTrail;
