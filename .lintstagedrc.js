export default {
  '*.{md,json}': ['prettier --write'],
  '*.{js,jsx,cjs,mjs,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,vue}': ['stylelint --fix', 'prettier --write'],
}
