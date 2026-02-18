import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneMemory3 = ({ onNext }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.mutedRose}30 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
    <motion.div className="relative z-20 text-center max-w-3xl">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 0.5 }} style={{ fontSize: BRAND.typography.sizes.title, lineHeight: BRAND.typography.lineHeight.relaxed, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '2rem' }}>
        You are calm but strong. Soft but sharp. Playful but deeply thoughtful.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.5 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
        There is something about the way you move through life…
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.3 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
        You don't rush. You observe. You think.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 3.1 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section, opacity: 0.9 }}>
        And I admire that more than you know.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>
        <GlassButton onClick={onNext}>continue</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
