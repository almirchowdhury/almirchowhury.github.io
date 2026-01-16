export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: 'rgba(134, 255, 0, 1)',
          cyan: 'rgba(0, 226, 255, 1)',
          yellow: 'rgba(255, 214, 0, 1)',
        },
      },
      fontFamily: {
        display: ['"Russo One"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
