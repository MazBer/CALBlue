import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#137fec',
        'accent-coral': '#FF7F50',
        'accent-yellow': '#FFD700',
        'background-light': '#f6f7f8',
        'background-dark': '#101922',
        'ocean-dark': '#0a2a4d'
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px'
      }
    }
  },
  plugins: [forms, typography, containerQueries]
};
