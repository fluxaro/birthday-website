import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { useState } from 'react';

export const Scene9_EmotionCheck = ({ onNext }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setTimeout(() => onNext(), 1500);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.warmBrownAccent}30 100%)`,
      }}
    >
      <motion.div className="relative z-20 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1.5rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          be honest…
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '3rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          are you smiling or almost crying?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {['smiling', 'almost crying', 'both'].map((option, index) => (
            <motion.button
              key={option}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: selected === option ? [1, 1.05, 1] : 1,
              }}
              transition={{
                opacity: { delay: 2.5 + index * 0.2 },
                y: { delay: 2.5 + index * 0.2 },
                scale: { duration: 0.6, repeat: selected === option ? 2 : 0 },
              }}
              whileHover={{ scale: 1.02, opacity: 1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(option)}
              style={{
                padding: '1rem 2rem',
                background: selected === option 
                  ? `${BRAND.colors.softPinkGlow}40` 
                  : `${BRAND.colors.mutedRose}20`,
                backdropFilter: 'blur(10px)',
                border: `2px solid ${selected === option ? BRAND.colors.softPinkGlow : BRAND.colors.mutedRose}60`,
                borderRadius: '12px',
                color: BRAND.colors.warmNeutral,
                fontSize: BRAND.typography.sizes.body,
                fontWeight: 300,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: selected && selected !== option ? 0.3 : 0.8,
                fontFamily: BRAND.typography.fonts.body,
              }}
            >
              {option}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
