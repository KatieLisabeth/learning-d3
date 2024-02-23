module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "prettier",
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "off",
        "no-console": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["warn"],
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
    },
};
