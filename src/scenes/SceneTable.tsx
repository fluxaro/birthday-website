import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneTable = ({ onNext }: { onNext: () => void }) => {
  const [showTable, setShowTable] = useState(false);
  useEffect(() => { setTimeout(() => setShowTable(true), 2000); }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.warmBrownAccent} 0%, ${BRAND.colors.softPinkGlow}30 100%)` }}>
      {showTable && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 3 }} className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-48 border-4 rounded-2xl shadow-2xl" style={{ borderColor: `${BRAND.colors.softPinkGlow}40` }} />
        </motion.div>
      )}
      <motion.div className="relative z-20 text-center max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
          oh... that table
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <GlassButton onClick={onNext}>yes, that one</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
