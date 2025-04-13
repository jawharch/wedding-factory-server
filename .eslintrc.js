module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'jsdoc', 'prefer-arrow', "unused-imports"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
  ],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'prefer-arrow/prefer-arrow-functions': ['warn'],
    'import/no-unresolved': ['error'],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  }
};
