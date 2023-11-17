// Configuration for ESLint
module.exports = {
  // Specify the parser for TypeScript files
  parser: "@typescript-eslint/parser",

  // Extend the recommended ESLint configuration and TypeScript recommended configuration
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],

  // Specify the plugins to be used (TypeScript and Prettier)
  plugins: ["@typescript-eslint", "prettier"],

  // Define specific rules for the project
  rules: {
    // Use Prettier for code formatting, raise an error if formatting is not compliant
    "prettier/prettier": "error",
  },

  // Configure parser options
  parserOptions: {
    // Specify the ECMAScript version (ES2023 in this case)
    ecmaVersion: 2023,

    // Specify the source type (module in this case)
    sourceType: "module",
  },

  // Configure the environments where the code will run
  env: {
    // Enables Node.js global variables and Node.js-specific rules
    node: true,

    // Enables browser global variables and browser-specific rules
    browser: true,

    // Enables ES2023 global variables and ES2023-specific rules
    es2023: true,
  },
};
