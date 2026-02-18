import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../theme/brandTokens';
import { audioManager } from '../engine/AudioManager';
import * as THREE from 'three';

const ChessPiece = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.3, 0.4, 1, 16]} />
        <meshStandardMaterial color={BRAND.colors.softPinkGlow} roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.7, 0]} castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color={BRAND.colors.softPinkGlow} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
};

const Board = ({ moveCount }: { moveCount: number }) => {
  const positions: [number, number, number][] = [
    [0, 0.5, 0],
    [1.5, 0.5, 1.5],
    [3, 0.5, 0],
  ];

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[1.5, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color={BRAND.colors.warmBrownAccent} roughness={0.8} />
      </mesh>

      {[...Array(8)].map((_, i) =>
        [...Array(8)].map((_, j) => (
          <mesh
            key={`${i}-${j}`}
            position={[(i - 3.5) * 0.75, 0.01, (j - 3.5) * 0.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[0.7, 0.7]} />
            <meshStandardMaterial
              color={(i + j) % 2 === 0 ? BRAND.colors.warmBrownAccent : BRAND.colors.mutedRose}
              roughness={0.9}
            />
          </mesh>
        ))
      )}

      <ChessPiece position={positions[moveCount]} />

      <ambientLight intensity={0.4} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        castShadow
        color={BRAND.colors.softPinkGlow}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.3} color={BRAND.colors.mutedRose} />
    </>
  );
};

const ChessBoard = ({ onComplete }: { onComplete: () => void }) => {
  const [moveCount, setMoveCount] = useState(0);
  const [showText, setShowText] = useState(false);

  const messages = [
    'I knew you would do that',
    "you don't play around",
    'yeah... this is very you',
  ];

  const handleClick = () => {
    if (moveCount < 2) {
      audioManager.playChess();
      setShowText(true);

      setTimeout(() => {
        setMoveCount((prev) => prev + 1);
        setShowText(false);

        if (moveCount === 1) {
          setTimeout(() => setShowText(true), 800);
        }
      }, 2500);
    } else if (moveCount === 2 && showText) {
      setTimeout(() => onComplete(), 2000);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full h-2/3 md:h-3/4" onClick={handleClick}>
        <Canvas shadows camera={{ position: [0, 6, 8], fov: 50 }}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.5}
            maxAzimuthAngle={Math.PI / 12}
            minAzimuthAngle={-Math.PI / 12}
          />
          <Board moveCount={moveCount} />
        </Canvas>
      </div>

      <AnimatePresence mode="wait">
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2 }}
            className="text-center px-6 max-w-2xl"
          >
            <p
              style={{
                fontSize: BRAND.typography.sizes.title,
                color: BRAND.colors.softPinkGlow,
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: BRAND.typography.lineHeight.relaxed,
              }}
            >
              {messages[moveCount]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {moveCount < 2 && !showText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '3rem',
            fontSize: BRAND.typography.sizes.small,
            color: BRAND.colors.softPinkGlow,
            opacity: 0.5,
            fontWeight: 300,
          }}
        >
          tap to move the piece
        </motion.p>
      )}
    </div>
  );
};

export default ChessBoard;
