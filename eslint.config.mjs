import gitignore from 'eslint-config-flat-gitignore'
import jota from 'eslint-config-jota'
import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  gitignore(),
  ...jota,
  ...eslintPluginAstro.configs.recommended
)
