/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#141016',
        'secondary-dark': '#1C1521',
        'soft-pink-glow': '#E7B8C9',
        'muted-rose': '#C88FA3',
        'warm-brown-accent': '#6A4E4B',
        'warm-neutral': '#F2E9E4',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}
