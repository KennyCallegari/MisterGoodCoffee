module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': [2, 120],
    'react/jsx-first-prop-new-line': [0],
    'react/prop-types': [0],
    'react/jsx-max-props-per-line': [0],
    'react/jsx-closing-bracket-location': [0],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
  },
};
