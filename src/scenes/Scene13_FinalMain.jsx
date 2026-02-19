import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';

export const Scene13_FinalMain = ({ onNext }) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)`,
        position: 'relative',
      }}
    >
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          I am glad I get this version of you
        </motion.p>
      </motion.div>

      {/* Slow fade to dark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 4 }}
        onAnimationComplete={() => {
          setTimeout(() => onNext(), 2000);
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: BRAND.colors.primaryBg,
          pointerEvents: 'none',
          zIndex: 30,
        }}
      />
    </div>
  );
};
