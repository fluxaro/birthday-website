import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen6 = () => {
  const { nextScreen, playInteraction } = useInteraction();
  const containerRef = useRef(null);
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #F5D5D8 0%, #A67B5B 100%)',
      duration: 3
    });
  }, []);

  const handleHold = () => {
    setShowHidden(true);
    playInteraction();
  };

  const words = ['imagine', 'versions', 'parallel', 'wonder', 'leave'];

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
          className="text-2xl md:text-4xl lg:text-5xl font-light text-text-light mb-8 leading-relaxed"
        >
          I imagine them sometimes
        </motion.h2>
        
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-text-light/80 mb-8 leading-relaxed font-light"
        >
          And I leave something for them
        </motion.p>

        {showHidden && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-text-light/50 italic mb-8 text-sm"
          >
            Just in case they're wondering about this version too
          </motion.p>
        )}

        <CTAButton text="wait... what?" onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen6;
