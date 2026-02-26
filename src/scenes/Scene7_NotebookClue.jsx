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
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          i left something for you on the bed
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          style={{
            fontSize: BRAND.typography.sizes.body,
            lineHeight: BRAND.typography.lineHeight.relaxed,
            color: BRAND.colors.warmNeutral,
            fontWeight: 300,
            marginBottom: '2rem',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          when u see it open it
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          style={{
            fontSize: BRAND.typography.sizes.small,
            lineHeight: BRAND.typography.lineHeight.normal,
            color: BRAND.colors.softPinkGlow,
            fontWeight: 300,
            marginBottom: '4rem',
            opacity: 0.8,
            fontStyle: 'italic',
            fontFamily: BRAND.typography.fonts.body,
          }}
        >
          hint: it is a pink notebook
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.5 }}
        >
          <GlassButton onClick={onNext}>okay</GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
};