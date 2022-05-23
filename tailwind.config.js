const { fontFamily } = require('tailwindcss/defaultTheme')
const { zinc, amber } = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
    },

    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      accent: 'crimson',
      gray: zinc,
    },

    extend: {
      fontFamily: {
        sans: `'DM Sans', ${fontFamily.sans.join(', ')}`,
        mono: `'Fira Code', ${fontFamily.mono.join(', ')}`,
      },
    },
  },

  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography')],
}
