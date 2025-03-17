module.exports = function(eleventyConfig) {
  // Copy CSS and assets directories to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

   // Debugging: log how many items are found in each collection
   eleventyConfig.addCollection("blog", (collectionApi) => {
    let items = collectionApi.getFilteredByGlob("src/blog/*.njk");
    items = items.filter(item => !item.inputPath.endsWith("index.njk"));
    console.log("Blog items count:", items.length);
    return items;
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    let items = collectionApi.getFilteredByGlob("src/projects/*.njk");
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
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};