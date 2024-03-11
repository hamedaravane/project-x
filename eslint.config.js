export default [
  {
    files: ['src/**/*.ts'],
    ignores: '',
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: 'espree'
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "warn",
      parser: '@typescript-eslint/parser',
    },
    plugins: ['unused-imports', 'prettier'],
    rules: {
      quotes: ['error', 'single', {allowTemplateLiterals: true}],
      semi: ['error', 'always'],
      '@angular-eslint/template/interactive-supports-focus': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/explicit-function-return-type': ['error'],
      'unused-imports/no-unused-imports': ['error'],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['src/**/*.html'],
    excludedFiles: ['*inline-template-*.component.html'],
    plugins: ['prettier'],
    rules: {
      '@angular-eslint/template/interactive-supports-focus': ['off'],
      '@angular-eslint/template/click-events-have-key-events': ['off'],
      'prettier/prettier': [
        'error',
        {
          parser: 'angular',
        },
      ],
    },
  }
];
