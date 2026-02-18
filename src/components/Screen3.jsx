import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen3 = () => {
  const { nextScreen } = useInteraction();
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(containerRef.current, {
      background: 'linear-gradient(135deg, #FFF4E0 0%, #FFE8B8 100%)',
      duration: 2.5
    })
    .to(containerRef.current, {
      background: 'linear-gradient(135deg, #D89BA0 0%, #C08B90 100%)',
      duration: 2.5
    })
    .to(containerRef.current, {
      background: 'linear-gradient(135deg, #F5D5D8 0%, #E8C5C8 100%)',
      duration: 2.5
    });
  }, []);

  const words = ['pink', 'colors', 'favorite', 'soft', 'glow'];

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
          Your favorite color is pink, but not loud pink
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-text-light/80 mb-12 leading-relaxed font-light"
        >
          Soft pink with brown tones. Like this.
        </motion.p>

        <CTAButton text="okay.... that's actually cute" onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen3;
