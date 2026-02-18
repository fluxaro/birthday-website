import { motion, AnimatePresence } from 'framer-motion';
import { useSceneController } from '../hooks/useSceneController';
import { ParticleLayer } from '../canvas/ParticleLayer';
import { RippleLayer } from '../canvas/RippleLayer';
import { TransitionLayer } from './TransitionLayer';

// Scene imports
import { SceneIntro } from '../scenes/SceneIntro';
import { SceneMemory1 } from '../scenes/SceneMemory1';
import { SceneMemory2 } from '../scenes/SceneMemory2';
import { SceneMemory3 } from '../scenes/SceneMemory3';
import { SceneColor } from '../scenes/SceneColor';
import { SceneVersions1 } from '../scenes/SceneVersions1';
import { SceneVersions2 } from '../scenes/SceneVersions2';
import { SceneChess } from '../scenes/SceneChess';
import { SceneTable } from '../scenes/SceneTable';
import { SceneReturn } from '../scenes/SceneReturn';
import { SceneEmotion } from '../scenes/SceneEmotion';
import { SceneTruth } from '../scenes/SceneTruth';
import { SceneJourney } from '../scenes/SceneJourney';
import { SceneBirthday } from '../scenes/SceneBirthday';
import { SceneFinal } from '../scenes/SceneFinal';

export const SceneManager = () => {
  const { currentScene, nextScene, isTransitioning } = useSceneController();

  const scenes = [
    <SceneIntro key={0} onNext={nextScene} />,
    <SceneMemory1 key={1} onNext={nextScene} />,
    <SceneMemory2 key={2} onNext={nextScene} />,
    <SceneMemory3 key={3} onNext={nextScene} />,
    <SceneColor key={4} onNext={nextScene} />,
    <SceneVersions1 key={5} onNext={nextScene} />,
    <SceneVersions2 key={6} onNext={nextScene} />,
    <SceneChess key={7} onNext={nextScene} />,
    <SceneTable key={8} onNext={nextScene} />,
    <SceneReturn key={9} onNext={nextScene} />,
    <SceneEmotion key={10} onNext={nextScene} />,
    <SceneTruth key={11} onNext={nextScene} />,
    <SceneJourney key={12} onNext={nextScene} />,
    <SceneBirthday key={13} onNext={nextScene} />,
    <SceneFinal key={14} />,
  ];

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ isolation: 'isolate' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <ParticleLayer />
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, filter: 'blur(2px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(2px)' }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ position: 'absolute', inset: 0, zIndex: 10 }}
        >
          {scenes[currentScene]}
        </motion.div>
      </AnimatePresence>

      <TransitionLayer isActive={isTransitioning} />
    </div>
  );
};
