import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'deep-black': '#050505',
        'carbon': '#0a0a0a',
        'dark': '#111111',
        'dark-2': '#1a1a1a',
        'silver': '#c0c0c0',
        'silver-light': '#e8e8e8',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
