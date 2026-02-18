import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import FloatingWords from './FloatingWords';
import ParticleCanvas from './ParticleCanvas';
import { useInteraction } from '../context/InteractionContext';
import { fadeInUp, staggerContainer, sceneBreathing } from '../utils/animationConfig';

const Screen2 = () => {
  const { nextScreen, playInteraction } = useInteraction();
  const containerRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #2A2A35 0%, #3A3A45 100%)',
      duration: 3
    });
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    playInteraction();
  };

  const handleOptionHold = () => {
    setShowHidden(true);
    playInteraction();
  };

  const words = ['6', 'remember', 'childhood', 'memory', 'wonder'];

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-6"
      animate={sceneBreathing}
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
          className="text-3xl md:text-4xl lg:text-5xl font-light text-soft-pink mb-8"
        >
          Do you remember being 6?
        </motion.h2>

        <div className="space-y-4 mb-8">
          {['Yes, vividly', 'A little bit', 'Not really'].map((option, index) => (
            <motion.button
              key={index}
              variants={fadeInUp}
              onClick={() => handleOptionClick(index)}
              onMouseDown={handleOptionHold}
              onTouchStart={handleOptionHold}
              className={`w-full px-6 py-4 bg-soft-pink/5 backdrop-blur-sm border border-soft-pink/20 rounded-lg text-text-light hover:bg-soft-pink/10 transition-all duration-500 ${
                selectedOption === index ? 'bg-soft-pink/15 border-soft-pink/40' : ''
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {showHidden && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-text-light/50 italic mb-8 text-sm"
          >
            I wish I could have known you then.
          </motion.p>
        )}

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

export default Screen2;
