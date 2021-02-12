module.exports = {
  extends: [
    'stylelint-config-airbnb',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'max-nesting-depth': 4,
    'declaration-property-value-disallowed-list': {
      '/^border/': ['none'],
    },
  },
}
