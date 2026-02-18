import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneVersions2 = ({ onNext }: { onNext: () => void }) => {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.softPinkGlow}30 0%, ${BRAND.colors.warmBrownAccent} 100%)` }} onMouseDown={() => setShowHidden(true)} onTouchStart={() => setShowHidden(true)}>
      <motion.div className="relative z-20 text-center max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
          I imagine them sometimes
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, marginBottom: BRAND.spacing.element, opacity: 0.8 }}>
          And I leave something for them
        </motion.p>
        {showHidden && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, opacity: 0.5, fontStyle: 'italic', marginBottom: BRAND.spacing.element }}>
            Just in case they're wondering about this version too
          </motion.p>
        )}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <GlassButton onClick={onNext}>wait... what?</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
