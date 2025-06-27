import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vuePrettierConfig from '@vue/eslint-config-prettier/skip-formatting'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  vuePrettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ignores: [
      'node_modules',
      'dist',
      'package.json',
      'package-lock.json',
      'pnpm-lock.yaml',
    ],
    rules: {
      // 组件名多单词
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index'],
        },
      ],
      // 使用组件使用 PascalCase 形式
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-closing-bracket-newline': [
        'warn',
        {
          multiline: 'never',
        },
      ],
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'any',
            normal: 'always',
            component: 'always',
          },
        },
      ],
      'use-isnan': 'error',
    },
  },
]
