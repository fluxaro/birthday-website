import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

interface SceneIntroProps {
  onNext: () => void;
}

export const SceneIntro = ({ onNext }: SceneIntroProps) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(135deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/coverr-temp-gs6twatermarkedvideo0e1d415d9659a4bef89b9e2fb498b7c70mp4-2495-1080p.mp4" type="video/mp4" />
      </video>

      <motion.div
        className="relative z-20 text-center max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: BRAND.animation.easing.smooth,
            delay: 1,
          }}
          style={{
            fontSize: BRAND.typography.sizes.hero,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 300,
            marginBottom: BRAND.spacing.section,
          }}
        >
          For all the versions of you I never got to meet…
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: BRAND.animation.easing.smooth,
            delay: 2,
          }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: BRAND.spacing.section,
            opacity: 0.9,
          }}
        >
          and the one I get to love
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <GlassButton onClick={onNext}>let's begin</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
