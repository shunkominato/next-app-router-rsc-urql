module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'plugin:tailwindcss/recommended'],
  plugins: ['testing-library', 'jest', 'tailwindcss'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    "no-console": "warn",
    "no-var": "error",
    "prefer-const": "error"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
