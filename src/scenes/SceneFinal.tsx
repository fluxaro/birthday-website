import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';

export const SceneFinal = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
    <motion.div className="relative z-20 text-center max-w-4xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.hero, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, lineHeight: BRAND.typography.lineHeight.relaxed }}>
        I am glad I get this version of you
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, opacity: 0.6, fontStyle: 'italic' }}>
        Happy Birthday
      </motion.p>
    </motion.div>
    <motion.div className="absolute bottom-0 left-0 right-0 h-32" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ background: `linear-gradient(to top, ${BRAND.colors.softPinkGlow}10, transparent)` }} />
  </div>
);
