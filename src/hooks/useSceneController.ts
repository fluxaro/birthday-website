import { useState, useCallback, useEffect } from 'react';
import { audioManager } from '../engine/AudioManager';

export const useSceneController = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      audioManager.initialize();
      audioManager.startAmbient();
    }

    return () => {
      audioManager.cleanup();
    };
  }, [hasInteracted]);

  const nextScene = useCallback(() => {
    if (isTransitioning) return;

    if (!hasInteracted) {
      setHasInteracted(true);
    }

    setIsTransitioning(true);
    audioManager.playClick();

    setTimeout(() => {
      setCurrentScene((prev) => Math.min(prev + 1, 14));
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning, hasInteracted]);

  const goToScene = useCallback(
    (sceneIndex: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      audioManager.playClick();

      setTimeout(() => {
        setCurrentScene(sceneIndex);
        setIsTransitioning(false);
      }, 800);
    },
    [isTransitioning]
  );

  return {
    currentScene,
    nextScene,
    goToScene,
    isTransitioning,
  };
};
