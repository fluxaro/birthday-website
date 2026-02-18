import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneColor = ({ onNext }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '2rem', lineHeight: BRAND.typography.lineHeight.relaxed }}>
          There are so many versions of you that existed before I met you.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.5 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          Little you. Teenage you. The quiet versions. The bold versions.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.3 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          I did not get to meet them.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 3.1 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          But I think about them.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 3.9 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, opacity: 0.9 }}>
          Because they led you here.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.7 }}>
          <GlassButton onClick={onNext}>continue</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
