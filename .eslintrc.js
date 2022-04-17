module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "preact"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
  },
  settings: {
    react: {
      pragma: "h",
    },
    jest: {
      version: "latest",
    },
  },
};
