module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-confusing-v-for-v-if': 'warning',
    'vue/this-in-template': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
