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
      hero: 'clamp(1.75rem, 4vw, 2.5rem)', // Reduced
      title: 'clamp(1.25rem, 3vw, 1.75rem)', // Reduced
      body: 'clamp(1rem, 2vw, 1.25rem)', // Reduced
      small: 'clamp(0.875rem, 1.5vw, 1rem)', // Reduced
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
