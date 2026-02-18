import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen7 = () => {
  const { nextScreen, playInteraction } = useInteraction();
  const containerRef = useRef(null);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #A67B5B 0%, #F5D5D8 100%)',
      duration: 3
    });

    setTimeout(() => setShowTable(true), 2000);
  }, []);

  const handleTap = () => {
    playInteraction();
  };

  const words = ['table', 'remember', 'place', 'belong', 'home'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6"
      animate={sceneBreathing}
      onClick={handleTap}
      onTouchStart={handleTap}
    >
      <ParticleCanvas rippleEffect={true} />
      <FloatingWords words={words} />

      {showTable && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-72 h-48 border-4 border-soft-pink/40 rounded-2xl shadow-2xl" />
        </motion.div>
      )}

      <motion.div
        className="relative z-20 text-center max-w-3xl px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-text-light mb-12 leading-relaxed"
        >
          oh... that table
        </motion.h2>

        <CTAButton text="yes, that one" onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen7;
