const eleventyNavigationPlugin = require("eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Copy CSS and assets directories to the output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add Eleventy Navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
