/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/BannerShopee.png')",
        'blues-gradient': 'linear-gradient(180deg, #00BBFF 0%, #02A5E0 39.5%, #006E96 75.5%, #005E80 100%)'
      },

      colors: {
        oranges: '#ee4d2d',
        blues: '#4876FF'
      }
    }
  },
  plugins: []
}
