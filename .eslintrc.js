module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/display-name': 'off'
  },
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
}; 