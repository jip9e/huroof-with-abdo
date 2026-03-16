import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fff9',
          100: '#b3ffee',
          200: '#80ffe3',
          300: '#4dffd8',
          400: '#1affcd',
          500: '#00d4aa',
          600: '#00a888',
          700: '#007d66',
          800: '#005244',
          900: '#002622',
        },
        navy: {
          50: '#e8ecf4',
          100: '#c5cde3',
          200: '#9eadd0',
          300: '#778dbd',
          400: '#5975af',
          500: '#3b5da1',
          600: '#2d4a82',
          700: '#1f3763',
          800: '#142544',
          900: '#0a1628',
          950: '#050b14',
        },
        gold: {
          DEFAULT: '#ffd700',
          light: '#ffdf33',
          dark: '#ccac00',
        },
        team1: '#22c55e',
        team2: '#ef4444',
      },
      fontFamily: {
        arabic: ['Noto Kufi Arabic', 'Tajawal', 'Arial', 'sans-serif'],
      },
      animation: {
        'hex-pulse': 'hexPulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'confetti': 'confetti 1s ease-out forwards',
      },
      keyframes: {
        hexPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 170, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 170, 0.8), 0 0 40px rgba(0, 212, 170, 0.4)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-200px) rotate(720deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
