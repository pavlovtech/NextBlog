import next from 'eslint-config-next/core-web-vitals'

// eslint-config-next v16 ships a native flat config array (base + core-web-vitals
// rules + TS parser + default ignores for .next/out/build/next-env.d.ts).
const eslintConfig = [
  ...next,
  { ignores: ['.content-collections/**'] },
]

export default eslintConfig
