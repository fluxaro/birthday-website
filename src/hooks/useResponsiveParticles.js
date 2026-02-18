import { useState, useEffect } from 'react';

export const useResponsiveParticles = () => {
  const [particleCount, setParticleCount] = useState(50);

  useEffect(() => {
    const updateParticleCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setParticleCount(30);
      } else if (width < 1024) {
        setParticleCount(40);
      } else {
        setParticleCount(50);
      }
    };

    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  return particleCount;
};
