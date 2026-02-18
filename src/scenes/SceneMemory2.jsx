import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneMemory2 = ({ onNext }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.secondaryDark} 0%, ${BRAND.colors.primaryBg} 100%)` }}>
      <motion.div className="relative z-20 text-center max-w-3xl w-full">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 0.5 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          From the bottom of my heart, I tried my best to make this birthday feel special for you.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 1.3 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          Not loud. Not overwhelming. Just thoughtful.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 2.1 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          Every detail here was placed with care.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 2.9 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          The colors. The pauses. The softness.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 3.7 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, opacity: 0.9 }}>
          Because you deserve something intentional.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4.5 }}>
          <GlassButton onClick={onNext}>continue</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
