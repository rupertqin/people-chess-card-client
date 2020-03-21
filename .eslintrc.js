module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
    '@smartsalary/vue'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-extra-parens': 'off',
    "prefer-const": [
      "warn",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": true
      }
    ],
    "complexity": [
      "error",
      10
    ],
    "prefer-destructuring": [
      "error",
      {
        "array": false,
        "object": true
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "max-lines": [
      "warn",
      {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "class-methods-use-this": "off",
    "object-curly-newline": [
      "warn",
      {
        "ObjectExpression": {
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "multiline": true,
          "consistent": true
        },
        // "ImportDeclaration": {
        //   "multiline": false
        // },
        "ExportDeclaration": "never"
      }
    ],
  }
}
