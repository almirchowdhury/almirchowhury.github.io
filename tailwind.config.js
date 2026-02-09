export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1d1f2a',
        muted: '#5f6977',
        accent: '#c36a43',
        accent2: '#1a7f8d',
        accent3: '#d9a441',
        surface: '#f6f1ea',
        sand: '#efe5d9',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
