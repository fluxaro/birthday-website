import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

interface SceneMemory2Props {
  onNext: () => void;
}

export const SceneMemory2 = ({ onNext }: SceneMemory2Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showHidden, setShowHidden] = useState(false);

  const options = ['Yes, vividly', 'A little bit', 'Not really'];

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: `linear-gradient(135deg, ${BRAND.colors.secondaryDark} 0%, ${BRAND.colors.primaryBg} 100%)`,
      }}
    >
      <motion.div className="relative z-20 text-center max-w-2xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 300,
            marginBottom: BRAND.spacing.section,
          }}
        >
          Do you remember being 6?
        </motion.h2>

        <div className="space-y-4 mb-8">
          {options.map((option, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              onClick={() => setSelected(index)}
              onMouseDown={() => setShowHidden(true)}
              onTouchStart={() => setShowHidden(true)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              style={{
                width: '100%',
                padding: '1.25rem',
                background:
                  selected === index
                    ? `${BRAND.colors.softPinkGlow}15`
                    : `${BRAND.colors.softPinkGlow}05`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${BRAND.colors.softPinkGlow}${selected === index ? '40' : '20'}`,
                borderRadius: '12px',
                color: BRAND.colors.warmNeutral,
                fontSize: BRAND.typography.sizes.body,
                fontWeight: 300,
                cursor: 'pointer',
                transition: 'all 0.5s ease',
              }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {showHidden && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              fontSize: BRAND.typography.sizes.small,
              color: BRAND.colors.warmNeutral,
              opacity: 0.5,
              fontStyle: 'italic',
              marginBottom: BRAND.spacing.element,
            }}
          >
            I wish I could have known you then.
          </motion.p>
        )}

        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GlassButton onClick={onNext}>continue</GlassButton>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
