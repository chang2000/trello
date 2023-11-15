// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'node_modules',
    '*.json',
    'next-env.d.ts',
    'postcss.config.js',
    'tailwind.config.ts',
  ],
})
