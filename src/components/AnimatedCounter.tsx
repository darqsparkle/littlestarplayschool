import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  title: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2, title, suffix = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {inView ? (
          <CountUp
            end={end}
            duration={duration}
            suffix={suffix}
          />
        ) : '0' + suffix}
      </div>
      <div className="text-gray-600">{title}</div>
    </motion.div>
  );
};

export default AnimatedCounter