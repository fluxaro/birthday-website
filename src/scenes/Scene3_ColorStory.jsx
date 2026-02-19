import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';
import { useState, useEffect } from 'react';

export const Scene3_ColorStory = ({ onNext }) => {
  const [bgColor, setBgColor] = useState(BRAND.colors.primaryBg);

  useEffect(() => {
    // Subtle gradient transition: yellow → red → soft pink
    const timer1 = setTimeout(() => setBgColor('#2A2416'), 3000); // Dark yellow tint
    const timer2 = setTimeout(() => setBgColor('#2A1616'), 6000); // Dark red tint
    const timer3 = setTimeout(() => setBgColor('#241820'), 9000); // Soft pink tint
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      animate={{ background: bgColor }}
      transition={{ duration: 3, ease: 'easeInOut' }}
    >
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          you once told me something
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1.5rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          You started with yellow
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1.5rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          Then red
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 6 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1.5rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          You just kept buying pink
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 8 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          Until one day you realized
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 9.5 }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 400,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.accent, // Caveat font
          }}
        >
          "I think that is my favorite"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 11 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '3rem',
            opacity: 0.8,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          I liked that story
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 12 }}
        >
          <GlassButton onClick={onNext}>okay… that's actually cute</GlassButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
