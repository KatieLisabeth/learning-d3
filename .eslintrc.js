module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "@vue/typescript",
        "plugin:prettier/recommended",
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
            },
        ],
        // "vue/require-v-for-key": 0,
        // "no-dupe-keys": "error",
        // "no-unreachable": "error",
        // "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
        // "no-cond-assign": "error",
        // "no-func-assign": "error",
        // "no-inner-declarations": "error",
        // "no-sparse-arrays": "error",
        // "no-template-curly-in-string": "error",
        // "array-callback-return": "error",
        // "no-global-assign": "error",
        // "no-redeclare": "error",
        // "require-await": "error",
        // "import/no-unresolved": 0,
        // "id-blacklist": ["error", "array"],
        // "vue/return-in-computed-property": 0,
    },
};
