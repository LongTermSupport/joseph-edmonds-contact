// Project-specific ESLint additions. Merged AFTER ts-qa-ci's Tier A core config,
// never replacing it. This site has no project-specific rules yet; the block below
// only supplies the React plugins and globals the Tier A config expects a React
// project to register.
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

const projectRoot = new URL('..', import.meta.url).pathname;

export default tseslint.config(
  {
    ignores: ['dist', 'dist-server', 'node_modules', 'var', 'untracked', '.claude'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: projectRoot,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['**/src/test-utils/**', '**/src/entry-server.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    // main.tsx is Vite's client-only browser entry point (src/entry-server.tsx is the
    // separate SSR entry), so its module-top-level document read is not an SSR risk.
    // See tsQaConfig/tier-a-exemptions.json for the matching justified exemption.
    files: ['**/src/main.tsx'],
    rules: {
      'ts-qa/ssr-safe-hooks': 'off',
    },
  }
);
