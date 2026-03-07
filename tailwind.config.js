
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        text: 'hsl(var(--text) / <alpha-value>)',
        accent: '#e76a24',
        secondary: '#1c4595',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
