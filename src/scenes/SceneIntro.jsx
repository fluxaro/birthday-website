import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneIntro = ({ onNext }) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: BRAND.colors.primaryBg,
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Calm lake video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.15, zIndex: 0 }}
      >
        <source src="/coverr-temp-gs6twatermarkedvideo0e1d415d9659a4bef89b9e2fb498b7c70mp4-2495-1080p.mp4" type="video/mp4" />
      </video>

      {/* Soft pink glow in center */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle, ${BRAND.colors.softPinkGlow}20 0%, transparent 70%)`,
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <motion.div
        className="relative z-20 text-center max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: BRAND.animation.easing.smooth,
            delay: 1,
          }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 300,
            marginBottom: '2rem',
          }}
        >
          You are here.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: BRAND.animation.easing.smooth,
            delay: 2,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1rem',
          }}
        >
          Pause.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: BRAND.animation.easing.smooth,
            delay: 2.8,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1rem',
          }}
        >
          Take your time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: BRAND.animation.easing.smooth,
            delay: 3.6,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '3rem',
          }}
        >
          This is just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          style={{ position: 'relative', zIndex: 100 }}
        >
          <GlassButton onClick={onNext}>let's begin</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
