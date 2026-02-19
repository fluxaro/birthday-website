// Chapter 28 - Brand System
export const BRAND = {
  colors: {
    primaryBg: '#141016', // Deep plum-black
    secondaryDark: '#1C1521',
    softPinkGlow: '#E7B8C9', // Muted dusty pink
    mutedRose: '#C88FA3',
    warmBrownAccent: '#6A4E4B', // Soft brown
    warmNeutral: '#F5F1F2', // Soft off-white
  },
  typography: {
    fonts: {
      body: "'Caveat', cursive", // All handwriting
      accent: "'Caveat', cursive",
    },
    sizes: {
      hero: 'clamp(2rem, 5vw, 3rem)', // Increased
      title: 'clamp(1.5rem, 3.5vw, 2.25rem)', // Increased
      body: 'clamp(1.125rem, 2.25vw, 1.5rem)', // Increased
      small: 'clamp(1rem, 1.75vw, 1.25rem)', // Increased
    },
    lineHeight: {
      tight: 1.3,
      normal: 1.6,
      relaxed: 1.8,
    },
  },
  spacing: {
    section: '3rem',
    element: '1.5rem',
  },
  animation: {
    duration: {
      fast: 0.6,
      normal: 1.0,
      slow: 1.5,
    },
    easing: {
      smooth: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
