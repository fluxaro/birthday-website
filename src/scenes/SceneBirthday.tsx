import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneBirthday = ({ onNext }: { onNext: () => void }) => {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)` }} onMouseDown={() => setShowHidden(true)} onTouchStart={() => setShowHidden(true)}>
      <motion.div className="relative z-20 text-center max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, lineHeight: BRAND.typography.lineHeight.relaxed }}>
          you do not have to love your birthday…
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, marginBottom: BRAND.spacing.element, opacity: 0.8 }}>
          but I hope this one felt different
        </motion.p>
        {showHidden && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, opacity: 0.5, fontStyle: 'italic', marginBottom: BRAND.spacing.element }}>
            Because you deserve to feel special
          </motion.p>
        )}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <GlassButton onClick={onNext}>okay...</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
