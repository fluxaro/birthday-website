// Brand System - STRICT ENFORCEMENT
export const BRAND = {
  colors: {
    primaryBg: '#141016',
    secondaryDark: '#1C1521',
    softPinkGlow: '#E7B8C9',
    mutedRose: '#C88FA3',
    warmBrownAccent: '#6A4E4B',
    warmNeutral: '#F2E9E4',
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    sizes: {
      hero: 'clamp(2.5rem, 6vw, 5rem)',
      title: 'clamp(2rem, 4vw, 3.5rem)',
      body: 'clamp(1.125rem, 2vw, 1.5rem)',
      small: 'clamp(0.875rem, 1.5vw, 1rem)',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },
  spacing: {
    section: 'clamp(2rem, 5vw, 4rem)',
    element: 'clamp(1rem, 3vw, 2rem)',
  },
  animation: {
    duration: {
      fast: 0.4,
      normal: 0.8,
      slow: 1.2,
      verySlow: 2.0,
    },
    easing: {
      smooth: [0.22, 0.61, 0.36, 1],
      power2Out: [0.25, 0.46, 0.45, 0.94],
    },
  },
} as const;

export type BrandColors = typeof BRAND.colors;
