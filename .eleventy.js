module.exports = function(eleventyConfig) {
    // Passthrough copy for any assets (optional)
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
  