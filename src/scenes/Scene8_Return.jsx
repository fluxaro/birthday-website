import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const Scene8_Return = ({ onNext }) => {
  const [showNotYet, setShowNotYet] = useState(false);

  const handleNotYet = () => {
    setShowNotYet(true);
  };

  const handleOkayFromNotYet = () => {
    setShowNotYet(false);
  };

  if (showNotYet) {
    return (
      <div
        className="w-full h-screen flex flex-col items-center justify-center px-6"
        style={{
          background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.warmBrownAccent}20 100%)`,
        }}
      >
        <motion.div className="relative z-20 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: BRAND.typography.sizes.body,
              lineHeight: BRAND.typography.lineHeight.relaxed,
              color: BRAND.colors.warmNeutral,
              fontWeight: 300,
              marginBottom: '4rem',
              fontFamily: BRAND.typography.fonts.body,
            }}
          >
            take your time, then come back
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <GlassButton onClick={handleOkayFromNotYet}>okay</GlassButton>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.warmBrownAccent}20 100%)`,
      }}
    >
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '4rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          done?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <GlassButton onClick={onNext}>yes</GlassButton>
          <GlassButton onClick={handleNotYet}>not yet</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};