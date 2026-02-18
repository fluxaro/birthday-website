import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing, microShake } from '../utils/animationConfig';

const Screen9 = () => {
  const { nextScreen, playInteraction } = useInteraction();
  const containerRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #2A2A35 0%, #1E1E2F 100%)',
      duration: 3
    });
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setShake(true);
    playInteraction();
    setTimeout(() => setShake(false), 400);
  };

  const words = ['smile', 'cry', 'feel', 'emotion', 'heart'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6"
      animate={shake ? microShake : sceneBreathing}
    >
      <ParticleCanvas rippleEffect={true} />
      <FloatingWords words={words} />

      <motion.div
        className="relative z-20 text-center max-w-2xl"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-soft-pink mb-8"
        >
          are you smiling or almost crying?
        </motion.h2>

        <div className="space-y-4 mb-8">
          {['Smiling', 'Almost crying', 'Both'].map((option, index) => (
            <motion.button
              key={index}
              variants={fadeInUp}
              onClick={() => handleOptionClick(index)}
              className={`w-full px-6 py-4 bg-soft-pink/5 backdrop-blur-sm border border-soft-pink/20 rounded-lg text-text-light hover:bg-soft-pink/10 transition-all duration-500 ${
                selectedOption === index ? 'bg-soft-pink/15 border-soft-pink/40' : ''
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {selectedOption !== null && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onClick={nextScreen}
            className="px-8 py-4 bg-soft-pink/10 backdrop-blur-sm border border-soft-pink/30 rounded-full text-soft-pink font-light"
          >
            continue
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Screen9;
