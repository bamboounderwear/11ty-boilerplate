module.exports = function(eleventyConfig) {
  // Passthrough copies for CSS and assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Navigation plugin if needed
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Blog collection: Pick files in src/blog, excluding index.njk
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.njk")
      .filter(item => !item.inputPath.endsWith("index.njk"));
  });

  // Projects collection: Pick files in src/projects, excluding index.njk
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.njk")
      .filter(item => !item.inputPath.endsWith("index.njk"));
  });

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
