import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen12 = () => {
  const { nextScreen, playInteraction } = useInteraction();
  const containerRef = useRef(null);
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(180deg, #1E1E2F 0%, #2A2A35 100%)',
      duration: 4
    });
  }, []);

  const handleHold = () => {
    setShowHidden(true);
    playInteraction();
  };

  const words = ['birthday', 'different', 'special', 'you', 'celebrate'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6"
      animate={sceneBreathing}
      onMouseDown={handleHold}
      onTouchStart={handleHold}
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
          className="text-2xl md:text-3xl lg:text-4xl font-light text-soft-pink mb-8 leading-relaxed"
        >
          you do not have to love your birthday…
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-soft-pink/80 mb-8 leading-relaxed font-light"
        >
          but I hope this one felt different
        </motion.p>

        {showHidden && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-text-light/50 italic mb-8 text-base"
          >
            Because you deserve to feel special
          </motion.p>
        )}

        <CTAButton text="okay..." onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen12;
