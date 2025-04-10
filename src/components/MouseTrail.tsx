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
    <>
      {/* Main star */}
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
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-70">
          <polygon 
            points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
            fill="yellow"
            stroke="gold"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Second star - follows with delay and offset */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 20,
          scale: 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.05,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-60">
          <polygon 
            points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
            fill="yellow"
            stroke="gold"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Third star - follows with more delay and different offset */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 22,
          y: mousePosition.y - 5,
          scale: 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.1,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-50">
          <polygon 
            points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
            fill="yellow"
            stroke="gold"
            strokeWidth="1"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default MouseTrail;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const MouseTrail = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isReducedMotion, setIsReducedMotion] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
//     setIsReducedMotion(mediaQuery.matches);

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     if (!mediaQuery.matches) {
//       window.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   if (isReducedMotion) return null;

//   return (
//     <motion.div
//       className="fixed pointer-events-none z-50"
//       animate={{
//         x: mousePosition.x - 15,
//         y: mousePosition.y - 15,
//         scale: 1,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 400,
//         damping: 20,
//       }}
//     >
//       {/* Star SVG */}
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-70">
//         <polygon 
//           points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
//           fill="yellow"
//           stroke="gold"
//           strokeWidth="1"
//         />
//       </svg>
//     </motion.div>
//   );
// };

// export default MouseTrail;
