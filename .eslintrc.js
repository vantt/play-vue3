module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:vue/vue3-essential",
    "@vue/prettier",
    "@vue/typescript"
  ],

  rules: {
    "no-console": "off",
    "no-debugger": "off",

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "quotes": [2, "single", "avoid-escape"],
    "indent": "off",
    "no-multiple-empty-lines": ["error", { max: 1 }]
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};




