module.exports = function(eleventyConfig) {
  // Copy CSS and assets directories to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Blog collection: Only pick files directly in src/blog that are not the index file
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.njk")
      .filter(item => item.fileSlug !== "index");
  });

  // Projects collection: Only pick files directly in src/projects that are not the index file
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.njk")
      .filter(item => item.fileSlug !== "index");
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
