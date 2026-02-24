import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';

export const SceneFinal = () => (
  <div 
    className="w-full h-screen flex flex-col items-center justify-center px-6" 
    style={{ 
      background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Infinite horizon effect - particle drift */}
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-32" 
      animate={{ opacity: [0.2, 0.4, 0.2] }} 
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} 
      style={{ 
        background: `linear-gradient(to top, ${BRAND.colors.softPinkGlow}10, transparent)`, 
        zIndex: 1,
        pointerEvents: 'none',
      }} 
    />

    {/* Text content - highest z-index */}
    <div 
      className="relative text-center max-w-4xl px-4" 
      style={{ 
        zIndex: 100,
        position: 'relative',
      }}
    >
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, delay: 0.5 }} 
        style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: BRAND.colors.warmNeutral, 
          fontWeight: 300, 
          marginBottom: '2rem',
          fontStyle: 'italic',
        }}
      >
        This is the end.
      </motion.p>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, delay: 1.5 }} 
        style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: BRAND.colors.softPinkGlow, 
          fontWeight: 300, 
          marginBottom: '1.5rem', 
          lineHeight: 1.4,
        }}
      >
        Happy Birthday, Babe.
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2, delay: 3 }} 
        style={{ 
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: BRAND.colors.warmNeutral, 
          fontWeight: 300,
        }}
      >
        I hope you loved it.
      </motion.p>
    </div>

    {/* Slow fade to dark - happens much later and stays behind text */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 8, delay: 20 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: BRAND.colors.primaryBg,
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  </div>
);
