module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:@nestjs/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // if using Prettier
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
  },
};
