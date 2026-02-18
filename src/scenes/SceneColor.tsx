import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const SceneColor = ({ onNext }: { onNext: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline();
    tl.to(containerRef.current, { background: 'linear-gradient(135deg, #FFF4E0 0%, #FFE8B8 100%)', duration: 2.5 })
      .to(containerRef.current, { background: `linear-gradient(135deg, ${BRAND.colors.mutedRose} 0%, ${BRAND.colors.warmBrownAccent} 100%)`, duration: 2.5 })
      .to(containerRef.current, { background: `linear-gradient(135deg, ${BRAND.colors.softPinkGlow}50 0%, ${BRAND.colors.secondaryDark} 100%)`, duration: 2.5 });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen flex flex-col items-center justify-center px-6">
      <motion.div className="relative z-20 text-center max-w-4xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ fontSize: BRAND.typography.sizes.title, color: BRAND.colors.warmNeutral, fontWeight: 300, marginBottom: BRAND.spacing.section }}>
          Your favorite color is pink, but not loud pink
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ fontSize: BRAND.typography.sizes.body, color: BRAND.colors.warmNeutral, marginBottom: BRAND.spacing.section, opacity: 0.8 }}>
          Soft pink with brown tones. Like this.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <GlassButton onClick={onNext}>okay.... that's actually cute</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
