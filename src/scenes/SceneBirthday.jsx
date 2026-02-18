import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneBirthday = ({ onNext }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(180deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)` }}>
      {/* Bouquet reappears - smaller */}
      <motion.img
        src="/download__5_-removebg-preview (1).png"
        alt="Bouquet"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: [0, -8, 0],
        }}
        transition={{ 
          opacity: { duration: 2, delay: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          width: 'clamp(80px, 15vw, 140px)',
          height: 'auto',
          marginBottom: '1rem',
          filter: 'drop-shadow(0 10px 30px rgba(231, 184, 201, 0.3))',
          mixBlendMode: 'screen',
          opacity: 0.9,
        }}
      />

      <motion.div className="relative z-20 text-center max-w-2xl">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '0.75rem', opacity: 0.9, lineHeight: 1.4 }}>
          You don't have to love birthdays.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.8 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '0.75rem', opacity: 0.9 }}>
          You don't have to love attention.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 2.6 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '1rem', opacity: 0.9 }}>
          But I hope…
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 3.4 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '1rem', lineHeight: 1.4 }}>
          This one felt different.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 4.2 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '0.75rem', opacity: 0.9 }}>
          I am grateful I get this version of you.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 5 }} style={{ fontSize: BRAND.typography.sizes.small, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: '0.75rem', opacity: 0.9 }}>
          The one who is here. The one who laughs. The one who challenges me. The one who chooses me.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 5.8 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.softPinkGlow, fontWeight: 300, marginBottom: '1.5rem' }}>
          And I hope you feel chosen today.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.8 }}>
          <GlassButton onClick={onNext}>continue</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
