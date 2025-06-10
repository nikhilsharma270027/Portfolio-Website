/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background/ng.png')",
      },
      colors: {
        'neon-blue': '#00f2ff',
        'neon-pink': '#ff00ff',
        'neon-green': '#39ff14',
      },
      boxShadow: {
        'neon': '0 0 10px #00f2ff, 0 0 20px #00f2ff, 0 0 30px #00f2ff',
      },
      textShadow: {
        'neon': '0 0 5px #00f2ff, 0 0 10px #00f2ff',
        'neon-hover': '0 0 10px #00f2ff, 0 0 15px #00f2ff, 0 0 20px #00f2ff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff',
        'neon-pink-hover': '0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-neon': {
          textShadow: '0 0 5px #00f2ff, 0 0 10px #00f2ff',
        },
        '.text-shadow-neon-hover': {
          textShadow: '0 0 10px #00f2ff, 0 0 15px #00f2ff, 0 0 20px #00f2ff',
        },
        '.text-shadow-neon-pink': {
          textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
        },
        '.text-shadow-neon-pink-hover': {
          textShadow: '0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff',
        },
        '.neon-glow': {
          boxShadow: '0 0 10px #00f2ff, 0 0 20px #00f2ff, 0 0 30px #00f2ff',
          opacity: '0.3',
          transition: 'opacity 0.3s ease-in-out',
        },
        '.hover\\:neon-glow:hover': {
          opacity: '0.5',
        },
      });
    },
  ],
}