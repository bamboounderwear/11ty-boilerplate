module.exports = function(eleventyConfig) {
  // Copy CSS and assets directories to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add date filter
  eleventyConfig.addFilter("date", function(date, format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options).replace(/\//g, '-');
  });

  // Blog collection
  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByTags("blog");
  });

  // Projects collection
  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByTags("project");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};