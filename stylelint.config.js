export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // 空 <style> 不报错
    'no-empty-source': null,

    // Vue/SCSS 常见放行
    'value-keyword-case': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'v-deep', 'deep'] },
    ],
  },
}
