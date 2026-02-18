import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import ChessBoard from '../three/ChessBoard';

export const SceneChess = ({ onNext }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full h-screen flex flex-col items-center justify-center" 
      style={{ 
        background: `linear-gradient(135deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)`,
        position: 'relative',
        zIndex: 10,
      }}
    >
      <ChessBoard onComplete={onNext} />
    </motion.div>
  );
};
