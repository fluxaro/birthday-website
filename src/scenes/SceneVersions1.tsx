import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneVersions1 = ({ onNext }: { onNext: () => void }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.softPinkGlow}30 0%, ${BRAND.colors.warmBrownAccent} 100%)` }}>
    <motion.div className="relative z-20 text-center max-w-4xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
        There are versions of you I will never meet
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, marginBottom: BRAND.spacing.section, opacity: 0.8 }}>
        And I think about them sometimes
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <GlassButton onClick={onNext}>okay... now I'm curious</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
