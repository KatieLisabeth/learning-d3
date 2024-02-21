module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
     "plugin:vue/essential",
     "plugin:prettier/recommended",
     "@vue/typescript",
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript'],
  rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
            },
        ],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-duplicate-imports": "error",
        // keep minimal set passing
        "vue/require-v-for-key": 0,
        "no-dupe-keys": "error",

        // don't allow code after a return statement
        "no-unreachable": "error",

        // don't allow references to variables or functions that don't exist
        "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
        "no-cond-assign": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "array-callback-return": "error",
        "no-global-assign": "error",
        "no-redeclare": "error",
        "require-await": "error",
        "import/no-unresolved": 0,
        "id-blacklist": ["error", "array"],
        "vue/return-in-computed-property": 0, // always return in computed => disable for now
        "vue/no-v-html": "warn",
    },

};
