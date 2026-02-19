import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { useEffect } from 'react';

export const Scene16_FinalScreen = () => {
  useEffect(() => {
    // Fade out audio over 4 seconds
    const audio = document.querySelector('audio');
    if (audio) {
      const fadeAudio = setInterval(() => {
        if (audio.volume > 0.01) {
          audio.volume = Math.max(0, audio.volume - 0.01);
        } else {
          clearInterval(fadeAudio);
          audio.pause();
        }
      }, 40);
      
      return () => clearInterval(fadeAudio);
    }
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: BRAND.colors.primaryBg,
        position: 'relative',
        zIndex: 100,
      }}
    >
      {/* Flower image */}
      <motion.img
        src="/download__5_-removebg-preview (1).png"
        alt="Flower"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -8, 0],
        }}
        transition={{ 
          opacity: { duration: 1.5, delay: 0.3 },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          width: 'clamp(100px, 18vw, 180px)',
          height: 'auto',
          marginBottom: '2rem',
          filter: 'drop-shadow(0 10px 30px rgba(231, 184, 201, 0.4))',
          mixBlendMode: 'screen',
          opacity: 0.9,
        }}
      />

      <motion.div className="relative z-50 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 700,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
            textTransform: 'lowercase',
          }}
        >
          the end
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 400,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          hope you loved it
        </motion.p>
      </motion.div>
    </div>
  );
};
