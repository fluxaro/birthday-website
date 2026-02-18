import { motion, AnimatePresence } from 'framer-motion';

interface TransitionLayerProps {
  isActive: boolean;
}

export const TransitionLayer = ({ isActive }: TransitionLayerProps) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(231,184,201,0.1) 0%, rgba(20,16,22,0.3) 100%)',
          }}
        />
      )}
    </AnimatePresence>
  );
};
