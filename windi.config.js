import formsPlugin from 'windicss/plugin/forms'
module.exports = {
  extract: {
    include: ['./**/*.html','./**/*.vue','./**/*.css'],
  },
  darkMode:'class',
  theme: {
    extend: {
      container: {
        center: true
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [formsPlugin]
}
