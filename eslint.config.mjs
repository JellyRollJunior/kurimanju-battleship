import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  // Apply recommended configurations from @eslint/js
  pluginJs.configs.recommended,

  // Define global variables for browser
  { languageOptions: { globals: globals.browser } },

  // Add Jest-specific configurations
  {
      files: ['**/__tests__/**/*.js', '**/*.test.js'], // Target Jest test files
      plugins: { jest: pluginJest },
      rules: {
          ...pluginJest.configs.recommended.rules, // Use recommended Jest rules
      },
      languageOptions: {
          globals: {
              ...globals.browser,
              ...globals.jest, // Include Jest globals like `describe`, `it`, etc.
          },
      },
  },
];
