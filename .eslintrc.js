module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'object-curly-spacing': ['error', 'never'],

    'vue/no-use-v-if-with-v-for': 0
  }
}
