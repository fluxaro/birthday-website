import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const Scene0_Opening = ({ onNext }) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: BRAND.colors.primaryBg,
        position: 'relative',
      }}
    >
      {/* Calm water video background */}
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

      {/* Subtle dark water texture background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(231, 184, 201, 0.03) 0%, transparent 70%)',
        opacity: 0.5,
        zIndex: 1,
      }} />

      <motion.div
        className="relative z-20 text-center max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 0.5,
          }}
          style={{
            fontSize: BRAND.typography.sizes.hero,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 300,
            marginBottom: '3rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          28
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 1.5,
          }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          Chapter 28
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 2.5,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            opacity: 0.9,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          For all the versions of you I never got to meet…
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: BRAND.animation.easing.smooth,
            delay: 3.5,
          }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '3rem',
            opacity: 0.9,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          and the one I get to love
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <GlassButton onClick={onNext}>let's begin</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
