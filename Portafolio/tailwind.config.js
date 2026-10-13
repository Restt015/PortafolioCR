/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0c0e12',
        surface: '#12151b',
        line: '#232831',
        text: '#e7e9ee',
        muted: '#9aa3b2',
        accent: '#3b82f6',
        sky: '#93c5fd',
        fill: '#2563eb',
        fillHover: '#1d4ed8',
      },
      fontFamily: {
        sans: ['"Instrument Sans Variable"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
