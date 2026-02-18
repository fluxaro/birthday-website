import React, { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

const InteractionContext = createContext();

export const useInteraction = () => useContext(InteractionContext);

export const InteractionProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [ambientSound, setAmbientSound] = useState(null);
  const [interactionSound, setInteractionSound] = useState(null);

  useEffect(() => {
    const ambient = new Howl({
      src: ['/cagancelik__river-stream-subtle-slow-gentle(chosic.com).mp3'],
      loop: true,
      volume: 0.3,
      html5: true
    });

    const interaction = new Howl({
      src: ['/cagancelik__river-stream-subtle-slow-gentle(chosic.com).mp3'],
      volume: 0.2,
      html5: true
    });

    setAmbientSound(ambient);
    setInteractionSound(interaction);

    return () => {
      ambient.unload();
      interaction.unload();
    };
  }, []);

  const playAmbient = () => {
    if (ambientSound && !ambientSound.playing()) {
      ambientSound.play();
    }
  };

  const playInteraction = () => {
    if (interactionSound) {
      interactionSound.play();
    }
  };

  const nextScreen = () => {
    setCurrentScreen(prev => Math.min(prev + 1, 14));
    playInteraction();
  };

  return (
    <InteractionContext.Provider value={{
      currentScreen,
      setCurrentScreen,
      nextScreen,
      playAmbient,
      playInteraction
    }}>
      {children}
    </InteractionContext.Provider>
  );
};
