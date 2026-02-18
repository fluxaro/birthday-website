import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneMemory3 = ({ onNext }: { onNext: () => void }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.mutedRose}30 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
    <motion.div className="relative z-20 text-center max-w-4xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth }} style={{ fontSize: BRAND.typography.sizes.title, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
        At 3, I was probably doing nonsense…
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section, opacity: 0.8 }}>
        what were you doing?
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <GlassButton onClick={onNext}>hmm... continue</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
