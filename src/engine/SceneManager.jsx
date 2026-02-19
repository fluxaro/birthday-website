import { motion, AnimatePresence } from 'framer-motion';
import { useSceneController } from '../hooks/useSceneController';
import { ParticleLayer } from '../canvas/ParticleLayer';
import { TransitionLayer } from './TransitionLayer';

// Chapter 28 Scene imports
import { Scene0_Opening } from '../scenes/Scene0_Opening';
import { Scene1_EarlyYears } from '../scenes/Scene1_EarlyYears';
import { Scene2_MemoryQuestion } from '../scenes/Scene2_MemoryQuestion';
import { Scene3_ColorStory } from '../scenes/Scene3_ColorStory';
import { Scene4_Childhood } from '../scenes/Scene4_Childhood';
import { Scene5_UnseenVersions } from '../scenes/Scene5_UnseenVersions';
import { Scene6_SuspenseBuild } from '../scenes/Scene6_SuspenseBuild';
import { Scene7_TableClue } from '../scenes/Scene7_TableClue';
import { Scene8_Return } from '../scenes/Scene8_Return';
import { Scene9_EmotionCheck } from '../scenes/Scene9_EmotionCheck';
import { Scene10_GentleConfession } from '../scenes/Scene10_GentleConfession';
import { Scene11_OpenOcean } from '../scenes/Scene11_OpenOcean';
import { Scene12_BirthdayTruth } from '../scenes/Scene12_BirthdayTruth';
import { Scene13_FinalMain } from '../scenes/Scene13_FinalMain';
import { Scene14_ChessEpilogue } from '../scenes/Scene14_ChessEpilogue';
import { Scene16_FinalScreen } from '../scenes/Scene16_FinalScreen';

export const SceneManager = () => {
  const { currentScene, nextScene, isTransitioning } = useSceneController();

  const scenes = [
    <Scene0_Opening key={0} onNext={nextScene} />,
    <Scene1_EarlyYears key={1} onNext={nextScene} />,
    <Scene2_MemoryQuestion key={2} onNext={nextScene} />,
    <Scene3_ColorStory key={3} onNext={nextScene} />,
    <Scene4_Childhood key={4} onNext={nextScene} />,
    <Scene5_UnseenVersions key={5} onNext={nextScene} />,
    <Scene6_SuspenseBuild key={6} onNext={nextScene} />,
    <Scene7_TableClue key={7} onNext={nextScene} />,
    <Scene8_Return key={8} onNext={nextScene} />,
    <Scene9_EmotionCheck key={9} onNext={nextScene} />,
    <Scene10_GentleConfession key={10} onNext={nextScene} />,
    <Scene11_OpenOcean key={11} onNext={nextScene} />,
    <Scene12_BirthdayTruth key={12} onNext={nextScene} />,
    <Scene13_FinalMain key={13} onNext={nextScene} />,
    <Scene14_ChessEpilogue key={14} onNext={nextScene} />,
    <Scene16_FinalScreen key={15} />,
  ];

  return (
    <div className="fixed inset-0" style={{ isolation: 'isolate', overflowY: 'auto', overflowX: 'hidden' }}>
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
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ position: 'relative', minHeight: '100vh', zIndex: 10 }}
        >
          {scenes[currentScene]}
        </motion.div>
      </AnimatePresence>

      <TransitionLayer isActive={isTransitioning} />
    </div>
  );
};
