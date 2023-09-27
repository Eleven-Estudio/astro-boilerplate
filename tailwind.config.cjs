/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      openSans: ['Open Sans', ...defaultTheme.fontFamily.sans]
    },
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
