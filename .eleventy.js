module.exports = function(eleventyConfig) {
    // Passthrough copy for CSS and assets directories
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets");
  
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
  