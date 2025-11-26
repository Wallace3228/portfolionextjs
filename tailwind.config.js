export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FDBA74',
          DEFAULT: '#F97316',
          dark: '#EA580C',
        }
      }
    },
  },
  plugins: [],
}
