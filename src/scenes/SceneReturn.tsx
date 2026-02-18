import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneReturn = ({ onNext }: { onNext: () => void }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.secondaryDark} 0%, ${BRAND.colors.primaryBg} 100%)` }}>
    <motion.div className="relative z-20 text-center max-w-4xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
        did you find them?
      </motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <GlassButton onClick={onNext}>yes...</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
