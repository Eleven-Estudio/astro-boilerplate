export default {
  '*.{astro,js,jsx,ts,tsx}': ['biome lint --write', 'biome lint'],
  'src/**/*': 'ls-lint'
}
