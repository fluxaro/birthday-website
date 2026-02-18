export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const sceneBreathing = {
  scale: [1, 1.01, 1],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const microShake = {
  x: [0, -2, 2, -2, 2, 0],
  transition: { duration: 0.4 }
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
