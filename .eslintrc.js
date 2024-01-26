module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "prettier"
      ],
      plugins: ['unused-imports'],
      parser: '@typescript-eslint/parser',
      rules: {
        quotes: ["error", "single", {"allowTemplateLiterals": true}],
        semi: ["error", "always"],
        "@angular-eslint/template/interactive-supports-focus": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "unused-imports/no-unused-imports": ["error"],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "style": "kebab-case"
          }
        ]
      },
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
        "prettier"
      ],
      rules: {
        "@angular-eslint/template/interactive-supports-focus": ["off"],
        "@angular-eslint/template/click-events-have-key-events": ["off"],
        "prettier": [
          "error",
          {
            "parser": "angular"
          }
        ]
      },
    }
  ],
}
