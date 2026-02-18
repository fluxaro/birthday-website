import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneJourney = ({ onNext }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 50%, ${BRAND.colors.warmBrownAccent}30 100%)` }}>
    <motion.div className="relative z-20 text-center max-w-4xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.hero, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, lineHeight: BRAND.typography.lineHeight.relaxed }}>
        all those years… led here
      </motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <GlassButton onClick={onNext}>continue</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
