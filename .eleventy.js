module.exports = function(eleventyConfig) {
  // Copy CSS and assets directories to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Blog collection: Look in src/blog for any .njk file, and filter out index.njk if needed
  eleventyConfig.addCollection("blog", function(collectionApi) {
    let items = collectionApi.getFilteredByGlob("src/blog/**/*.njk");
    // Uncomment the following line if you want to exclude index.njk files
    items = items.filter(item => !item.inputPath.endsWith("index.njk"));
    console.log("Blog items count:", items.length);
    return items;
  });

  // Projects collection: Look in src/projects for any .njk file, and filter out index.njk if needed
  eleventyConfig.addCollection("projects", function(collectionApi) {
    let items = collectionApi.getFilteredByGlob("src/projects/**/*.njk");
    // Uncomment the following line if you want to exclude index.njk files
    items = items.filter(item => !item.inputPath.endsWith("index.njk"));
    console.log("Projects items count:", items.length);
    return items;
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
