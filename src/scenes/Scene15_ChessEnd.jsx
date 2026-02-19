import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { useEffect } from 'react';

export const Scene15_ChessEnd = ({ onNext }) => {
  useEffect(() => {
    // Auto-advance after 4 seconds
    const timer = setTimeout(() => {
      onNext();
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: BRAND.colors.primaryBg,
      }}
    >
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: BRAND.typography.sizes.hero,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 500,
            marginBottom: '4rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          yeah… this is exactly you
        </motion.p>
      </motion.div>
    </div>
  );
};
