import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneVersions1 = ({ onNext }) => {
  const [selected, setSelected] = useState(null);
  const options = ['be brave', 'slow down', "you're doing fine"];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-6" style={{ background: `linear-gradient(135deg, ${BRAND.colors.softPinkGlow}30 0%, ${BRAND.colors.warmBrownAccent} 100%)` }}>
      <motion.div className="relative z-20 text-center max-w-2xl w-full">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
          If you could talk to one younger version of yourself, what would you say?
        </motion.h2>
        
        <div className="space-y-4 mb-8">
          {options.map((option, index) => (
            <motion.button 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }} 
              onClick={() => setSelected(index)} 
              whileHover={{ scale: 1.01 }} 
              whileTap={{ scale: 0.99 }} 
              style={{ 
                width: '100%', 
                padding: '1.25rem', 
                background: selected === index ? `${BRAND.colors.softPinkGlow}15` : `${BRAND.colors.softPinkGlow}05`, 
                backdropFilter: 'blur(10px)', 
                border: `1px solid ${BRAND.colors.softPinkGlow}${selected === index ? '40' : '20'}`, 
                borderRadius: '12px', 
                color: BRAND.colors.warmNeutral, 
                fontSize: BRAND.typography.sizes.body, 
                fontWeight: 300, 
                cursor: 'pointer', 
                transition: 'all 0.5s ease' 
              }}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <GlassButton onClick={onNext}>continue</GlassButton>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
