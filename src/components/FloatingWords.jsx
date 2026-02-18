import React from 'react';
import { motion } from 'framer-motion';

const FloatingWords = ({ words }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="absolute text-soft-pink/20 text-sm md:text-base font-light italic"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut"
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingWords;
