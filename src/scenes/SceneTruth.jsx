import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneTruth = ({ onNext }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
    {/* Brighter pink glow */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '450px',
      height: '450px',
      background: `radial-gradient(circle, ${BRAND.colors.softPinkGlow}35 0%, transparent 70%)`,
      filter: 'blur(90px)',
      pointerEvents: 'none',
    }} />

    <motion.div className="relative z-20 text-center max-w-3xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ fontSize: BRAND.typography.sizes.hero, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, lineHeight: BRAND.typography.lineHeight.relaxed }}>
        Did you find it?
      </motion.h2>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <GlassButton onClick={onNext}>yes…</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
