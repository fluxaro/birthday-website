import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen8 = () => {
  const { nextScreen } = useInteraction();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #2A2A35 0%, #1E1E2F 100%)',
      duration: 3
    });
  }, []);

  const words = ['find', 'them', 'versions', 'search', 'discover'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6"
      animate={sceneBreathing}
    >
      <ParticleCanvas rippleEffect={true} />
      <FloatingWords words={words} />

      <motion.div
        className="relative z-20 text-center max-w-3xl px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-soft-pink mb-12 leading-relaxed"
        >
          did you find them?
        </motion.h2>

        <CTAButton text="yes..." onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen8;
