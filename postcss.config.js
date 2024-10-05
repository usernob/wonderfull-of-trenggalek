/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-short'),
    require('tailwindcss'),
    require('postcss-preset-env')
  ]
}

module.exports = config
