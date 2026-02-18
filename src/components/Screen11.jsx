import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen11 = () => {
  const { nextScreen } = useInteraction();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(180deg, #1E1E2F 0%, #2A2A35 50%, #3A3A45 100%)',
      duration: 4
    });
  }, []);

  const words = ['years', 'led', 'here', 'journey', 'now'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6"
      animate={sceneBreathing}
    >
      <ParticleCanvas rippleEffect={false} />
      <FloatingWords words={words} />

      <motion.div
        className="relative z-20 text-center max-w-3xl px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-soft-pink mb-12 leading-relaxed"
        >
          all those years… led here
        </motion.h2>

        <CTAButton text="continue" onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen11;
