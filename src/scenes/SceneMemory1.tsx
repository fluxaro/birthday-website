import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

interface SceneMemory1Props {
  onNext: () => void;
}

export const SceneMemory1 = ({ onNext }: SceneMemory1Props) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(135deg, ${BRAND.colors.mutedRose}30 0%, ${BRAND.colors.secondaryDark} 100%)`,
      }}
    >
      <motion.div className="relative z-20 text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: BRAND.spacing.section,
          }}
        >
          I was not there at 1 or 5 or 16,
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 0.8 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: BRAND.spacing.section,
            opacity: 0.8,
          }}
        >
          but I still think about those versions sometimes
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <GlassButton onClick={onNext}>keep going</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
