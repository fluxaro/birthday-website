import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const Scene1_EarlyYears = ({ onNext }) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)`,
      }}
    >
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 0.5,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1.5rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          I was not there at{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{ color: BRAND.colors.softPinkGlow }}
          >
            1
          </motion.span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 2,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1.5rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          or{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            style={{ color: BRAND.colors.softPinkGlow }}
          >
            5
          </motion.span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 3,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          or{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            style={{ color: BRAND.colors.softPinkGlow }}
          >
            16
          </motion.span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 4.5,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '3rem',
            opacity: 0.8,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          but I still think about those versions sometimes
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.5 }}
        >
          <GlassButton onClick={onNext}>keep going</GlassButton>
        </motion.div>
      </motion.div>

      {/* Subtle glow that warms as text builds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 3, delay: 2 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle, ${BRAND.colors.softPinkGlow} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
