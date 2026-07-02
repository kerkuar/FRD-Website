/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      opacity: {
        2: '0.02', 3: '0.03', 4: '0.04', 6: '0.06', 8: '0.08',
        12: '0.12', 15: '0.15', 18: '0.18', 22: '0.22',
        35: '0.35', 45: '0.45', 55: '0.55', 65: '0.65', 85: '0.85',
      },
      colors: {
        // "Campaign Bold" palette — warm paper white + Volt purple + rally gold.
        // Token names kept from v1 (cream/ink/clay/sage) so existing classes still work:
        //   cream = backgrounds · ink = text · clay = PURPLE accent · sage = GOLD accent
        cream: { 50: '#FAF9F6', 100: '#F4F1EA', 200: '#EAE5D8', 300: '#DCD4BF' },
        ink: { 900: '#17121F', 800: '#231B2E', 700: '#3B3346', 600: '#554C64', 500: '#756C83', 400: '#9890A4' },
        clay: { 50: '#F3EDF9', 100: '#E4D6F1', 300: '#B28CD9', 500: '#7239A8', 600: '#582C83', 700: '#452168', 800: '#2E1547' },
        sage: { 100: '#FFF2D0', 400: '#FFC53D', 600: '#E8A413', 800: '#8A5D00' },
        // Semantic aliases for new components (same scales, clearer names):
        volt: { 50: '#F3EDF9', 100: '#E4D6F1', 300: '#B28CD9', 500: '#7239A8', 600: '#582C83', 700: '#452168', 800: '#2E1547' },
        gold: { 100: '#FFF2D0', 400: '#FFC53D', 600: '#E8A413', 800: '#8A5D00' },
      },
      fontFamily: {
        // "serif" now maps to the poster display face so every existing
        // font-serif heading picks up the campaign look automatically.
        serif: ['"Anton"', '"Arial Narrow"', 'Impact', 'sans-serif'],
        display: ['"Anton"', '"Arial Narrow"', 'Impact', 'sans-serif'],
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [],
};
