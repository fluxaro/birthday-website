import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import CTAButton from './CTAButton';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen0 = () => {
  const { nextScreen, playAmbient } = useInteraction();
  const containerRef = useRef(null);

  useEffect(() => {
    playAmbient();
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #1E1E2F 0%, #2A2A35 100%)',
      duration: 3
    });
  }, [playAmbient]);

  const words = ['versions', 'love', 'meet', 'you', 'forever'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
      animate={sceneBreathing}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/coverr-temp-gs6twatermarkedvideo0e1d415d9659a4bef89b9e2fb498b7c70mp4-2495-1080p.mp4" type="video/mp4" />
      </video>

      <ParticleCanvas rippleEffect={true} />
      <FloatingWords words={words} />

      <motion.div
        className="relative z-20 text-center max-w-3xl px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-soft-pink mb-8 leading-relaxed"
        >
          For all the versions of you I never got to meet…
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl text-soft-pink/90 mb-12 leading-relaxed font-light"
        >
          and the one I get to love
        </motion.p>

        <CTAButton text="let's begin" onClick={nextScreen} />
      </motion.div>
    </motion.div>
  );
};

export default Screen0;
