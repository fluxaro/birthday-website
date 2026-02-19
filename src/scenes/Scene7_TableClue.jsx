import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';
import { useState } from 'react';

export const Scene7_TableClue = ({ onNext }) => {
  const [showOverlay, setShowOverlay] = useState(false);

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
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: BRAND.typography.sizes.title,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          go check the table
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            fontSize: BRAND.typography.sizes.small,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '1rem',
            opacity: 0.6,
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          which table?
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          onClick={() => setShowOverlay(true)}
          whileHover={{ opacity: 1 }}
          style={{
            background: 'none',
            border: 'none',
            color: BRAND.colors.softPinkGlow,
            fontSize: BRAND.typography.sizes.small,
            fontWeight: 300,
            cursor: 'pointer',
            textDecoration: 'underline',
            opacity: 0.8,
            marginBottom: '3rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          tap if you are confused
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <GlassButton onClick={onNext}>continue</GlassButton>
        </motion.div>
      </motion.div>

      {/* Overlay with table image */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setShowOverlay(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: `${BRAND.colors.primaryBg}E6`,
              backdropFilter: 'blur(20px)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              <img 
                src="/table.jpg" 
                alt="The table"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  border: `2px solid ${BRAND.colors.mutedRose}40`,
                }}
              />

              <p style={{
                fontSize: BRAND.typography.sizes.body,
                color: BRAND.colors.warmNeutral,
                fontWeight: 300,
                marginBottom: '2rem',
                fontFamily: BRAND.typography.fonts.body,
              }}>
                the one we always use
              </p>

              <GlassButton onClick={() => setShowOverlay(false)}>
                oh… that table
              </GlassButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
