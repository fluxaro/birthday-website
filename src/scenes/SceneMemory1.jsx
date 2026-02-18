import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneMemory1 = ({ onNext }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
    {/* Bouquet image with floating animation */}
    <motion.img
      src="/download__5_-removebg-preview (1).png"
      alt="Bouquet"
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0],
      }}
      transition={{ 
        opacity: { duration: 2, delay: 0.5 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
      }}
      style={{
        width: 'clamp(100px, 20vw, 180px)',
        height: 'auto',
        marginBottom: '1.5rem',
        filter: 'drop-shadow(0 10px 30px rgba(231, 184, 201, 0.3))',
        mixBlendMode: 'screen',
        opacity: 0.9,
      }}
    />

    <motion.div className="relative z-20 text-center max-w-3xl">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 1 }} style={{ fontSize: BRAND.typography.sizes.title, lineHeight: BRAND.typography.lineHeight.normal, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '1.5rem' }}>
        My love, my everything…
      </motion.h2>
      
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 1.8 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.normal, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1rem', opacity: 0.9 }}>
        I know you are someone who understands details. You notice intention. You feel effort.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 2.6 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.normal, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1rem', opacity: 0.9 }}>
        That is why I wanted to create something that feels different.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 3.4 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.normal, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '1rem', opacity: 0.9 }}>
        Not just something to read. Something to experience.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: BRAND.animation.easing.smooth, delay: 4.2 }} style={{ fontSize: BRAND.typography.sizes.body, lineHeight: BRAND.typography.lineHeight.normal, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '2rem', opacity: 0.9 }}>
        I hope you sit with this.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 5 }}>
        <GlassButton onClick={onNext}>continue…</GlassButton>
      </motion.div>
    </motion.div>
  </div>
);
