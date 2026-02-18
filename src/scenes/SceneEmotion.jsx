import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneEmotion = ({ onNext }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.secondaryDark} 0%, ${BRAND.colors.primaryBg} 100%)` }}>
      {/* Dimmed background overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `${BRAND.colors.primaryBg}60`,
        backdropFilter: 'blur(4px)',
        zIndex: 5,
      }} />

      {/* Minimal table illustration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 0.15, scale: 1 }} 
        transition={{ duration: 2, delay: 1.5 }} 
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 6 }}
      >
        <div className="w-72 h-48 border-4 rounded-2xl shadow-2xl" style={{ borderColor: `${BRAND.colors.softPinkGlow}40` }} />
      </motion.div>

      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ fontSize: BRAND.typography.sizes.hero, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '2rem', lineHeight: BRAND.typography.lineHeight.relaxed }}>
          Go check the table.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.5 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          Yes. That one.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.5 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section, opacity: 0.9, fontStyle: 'italic' }}>
          I left something there.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          <GlassButton onClick={onNext}>okay...</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
