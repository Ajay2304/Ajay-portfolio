/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#040d1a',
          900: '#081229',
          800: '#0c1a3a',
          700: '#112250',
          600: '#162d6a',
        },
        electric: '#00A3FF',
        cyan: '#00D4FF',
        'cyan-soft': '#4AE3FF',
        accent: '#0066FF',
        surface: {
          DEFAULT: 'rgba(255,255,255,0.03)',
          hover: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.07)',
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(0,163,255,0.25)',
        'glow-cyan': '0 0 40px rgba(0,212,255,0.25)',
        'glow-sm':   '0 0 16px rgba(0,163,255,0.2)',
        'glow-lg':   '0 0 80px rgba(0,163,255,0.15), 0 0 120px rgba(0,212,255,0.08)',
        'card':      '0 8px 32px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow':   'spin 20s linear infinite',
        'spin-reverse':'spinReverse 15s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'glow-pulse':  'glowPulse 4s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'orbit':       'orbit 10s linear infinite',
        'orbit-reverse':'orbitReverse 12s linear infinite',
        'fade-up':     'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        spinReverse: {
          '0%':   { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 30px rgba(0,163,255,0.3), 0 0 60px rgba(0,212,255,0.1)' },
          '50%':     { boxShadow: '0 0 60px rgba(0,163,255,0.5), 0 0 120px rgba(0,212,255,0.2)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg) translateX(160px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(160px) rotate(-360deg)' },
        },
        orbitReverse: {
          '0%':   { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
