import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ChessInteraction from './ChessInteraction';
import { useInteraction } from '../context/InteractionContext';
import { sceneBreathing } from '../utils/animationConfig';

const ScreenChess = () => {
  const { nextScreen } = useInteraction();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: 'linear-gradient(135deg, #1A1618 0%, #2A2426 100%)',
      duration: 3
    });
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-screen"
      animate={sceneBreathing}
    >
      <ChessInteraction onComplete={nextScreen} />
    </motion.div>
  );
};

export default ScreenChess;
