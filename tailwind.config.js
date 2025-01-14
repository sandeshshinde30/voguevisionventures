/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darker-green' : "#163832",
        'dark-green': '#235347',
        'light-green' : '#8AB69B',
        'lighter-green' : "#DAF1DE",
        'background-green' : "#f2fcf4"
      },
    },
  },
  plugins: [],
}

