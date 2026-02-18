import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInteraction } from '../context/InteractionContext';

const ChessInteraction = ({ onComplete }) => {
  const [moveCount, setMoveCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const { playInteraction } = useInteraction();

  const messages = [
    "I knew you would do that",
    "you don't play around",
    "yeah... this is very you"
  ];

  const piecePositions = [
    { x: '20%', y: '60%', rotate: 0 },
    { x: '50%', y: '35%', rotate: 15 },
    { x: '75%', y: '55%', rotate: -10 }
  ];

  const handleInteraction = () => {
    if (moveCount < 2) {
      playInteraction();
      setShowText(true);
      
      setTimeout(() => {
        setMoveCount(prev => prev + 1);
        setShowText(false);
        
        if (moveCount === 1) {
          setTimeout(() => {
            setShowText(true);
          }, 800);
        }
      }, 2500);
    } else if (moveCount === 2 && showText) {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-6">
      {/* Chess Board with 3D perspective */}
      <div 
        className="relative w-full max-w-lg aspect-square mb-16 cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={handleInteraction}
      >
        {/* Board Background with 3D tilt */}
        <motion.div 
          className="absolute inset-0 rounded-xl shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(15deg) rotateZ(-2deg)'
          }}
          animate={{
            rotateX: [15, 17, 15],
            rotateZ: [-2, -1, -2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/40 to-night-bg/60 rounded-xl backdrop-blur-sm border border-soft-pink/20">
            {/* Chess Squares */}
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full p-3 gap-0.5">
              {[...Array(64)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`${
                    Math.floor(i / 8) % 2 === i % 2
                      ? 'bg-warm-brown/30'
                      : 'bg-night-bg/50'
                  } rounded-sm`}
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.02,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Chess Piece - Queen with 3D effect */}
        <motion.div
          className="absolute w-20 h-20 md:w-24 md:h-24 z-10"
          initial={false}
          animate={{
            left: piecePositions[moveCount].x,
            top: piecePositions[moveCount].y,
            x: '-50%',
            y: '-50%',
            rotateY: piecePositions[moveCount].rotate
          }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 10px 20px rgba(248, 209, 192, 0.4))'
          }}
        >
          {/* Queen Piece with glow */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="relative w-14 h-14 md:w-18 md:h-18"
              animate={{
                scale: [1, 1.08, 1],
                rotateY: [0, 360]
              }}
              transition={{
                scale: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-soft-pink/30 blur-xl" />
              
              {/* Main piece */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-soft-pink via-soft-pink to-warm-brown shadow-2xl flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 md:w-12 md:h-12 text-night-bg"
                  fill="currentColor"
                >
                  <path d="M12 2L9 9H15L12 2M9 9L6 16H18L15 9H9M6 16L4 22H20L18 16H6Z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Messages */}
      <AnimatePresence mode="wait">
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center px-6 max-w-2xl"
          >
            <p className="text-2xl md:text-3xl text-soft-pink font-light italic leading-relaxed">
              {messages[moveCount]}
            </p>
            {moveCount === 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="text-xl md:text-2xl text-soft-pink/70 font-light italic mt-6"
              >
                {messages[2]}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction */}
      {moveCount < 2 && !showText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 text-sm text-soft-pink/50 font-light"
        >
          tap to move the piece
        </motion.p>
      )}
    </div>
  );
};

export default ChessInteraction;
