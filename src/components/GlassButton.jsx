import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';

export const GlassButton = ({ onClick, children }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{
        padding: '0.875rem 2rem',
        background: 'rgba(231, 184, 201, 0.08)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${BRAND.colors.softPinkGlow}40`,
        borderRadius: '50px',
        color: BRAND.colors.softPinkGlow,
        fontSize: '1rem',
        fontWeight: 300,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 100,
        pointerEvents: 'auto',
      }}
      className="glass-button"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at center, ${BRAND.colors.softPinkGlow}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <span className="relative z-10" style={{ pointerEvents: 'none' }}>{children}</span>
    </motion.button>
  );
};
