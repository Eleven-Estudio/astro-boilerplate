/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        website: {
          primary: {
            500: '#0B0B0B',
            400: '#333333',
            300: '#5C5C5C',
            200: '#858585',
            100: '#ADADAD',
            50: '#D6D6D6'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}
