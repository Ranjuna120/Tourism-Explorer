/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976D2',
        secondary: '#FFD600',
        accent: '#00BFA5',
        sitebg: '#F5F5F5',
        sitetext: '#263238'
      }
    }
  },
  plugins: []
}
