import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen4 = () => {
  const { nextScreen } = useInteraction();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #D89BA0 0%, #C08B90 100%)',
      duration: 3
    });
  }, []);

  const words = ['3', 'childhood', 'wonder', 'play', 'curious'];

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
          className="text-2xl md:text-4xl lg:text-5xl font-light text-text-light mb-8 leading-relaxed"
        >
          At 3, I was probably doing nonsense…
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-text-light/80 mb-12 leading-relaxed font-light"
        >
          what were you doing?
        </motion.p>

        <CTAButton text="hmm... continue" onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen4;
