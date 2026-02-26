import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { GlassButton } from '../components/GlassButton';

export const Scene7_NotebookClue = ({ onNext }) => {
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
            marginBottom: '4rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          go check the pink notebook
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <GlassButton onClick={onNext}>okay</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};