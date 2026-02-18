import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';

const ChessBoard = lazy(() => import('../three/ChessBoard'));

interface SceneChessProps {
  onNext: () => void;
}

export const SceneChess = ({ onNext }: SceneChessProps) => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${BRAND.colors.primaryBg} 0%, ${BRAND.colors.secondaryDark} 100%)`,
      }}
    >
      <Suspense
        fallback={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: BRAND.colors.softPinkGlow,
              fontSize: BRAND.typography.sizes.body,
            }}
          >
            Loading...
          </motion.div>
        }
      >
        <ChessBoard onComplete={onNext} />
      </Suspense>
    </div>
  );
};
