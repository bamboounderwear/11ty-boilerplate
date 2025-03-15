// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./dist/**/*.html'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      : null
  ].filter(Boolean)
};
