import React from 'react';
import { motion } from 'framer-motion';
import { microShake } from '../utils/animationConfig';

const CTAButton = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="px-8 py-4 bg-soft-pink/10 backdrop-blur-sm border border-soft-pink/30 rounded-full text-soft-pink font-light text-lg hover:bg-soft-pink/20 transition-all duration-500 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {text}
    </motion.button>
  );
};

export default CTAButton;
