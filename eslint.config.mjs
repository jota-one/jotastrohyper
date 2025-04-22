import gitignore from 'eslint-config-flat-gitignore'
import jota, { easier } from 'eslint-config-jota'
import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

const ignores = tseslint.config({
  ignores: ['pb/**/*'],
})

export default tseslint.config(
  gitignore(),
  ...jota,
  ...easier,
  ...eslintPluginAstro.configs.recommended,
  ...ignores
)
