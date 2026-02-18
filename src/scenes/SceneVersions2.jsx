import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneVersions2 = ({ onNext }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.secondaryDark} 0%, ${BRAND.colors.primaryBg} 100%)` }}>
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '2rem', lineHeight: BRAND.typography.lineHeight.relaxed }}>
          I wanted to do something that felt like you.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.5 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          Something thoughtful. Something intentional. Something that makes you pause.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.5 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          So I created a small challenge.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 3.3 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1.5rem', opacity: 0.9 }}>
          Because I know you.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 4.1 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: BRAND.spacing.section, opacity: 0.9 }}>
          And I know you don't back down.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }}>
          <GlassButton onClick={onNext}>show me</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
