module.exports = function(eleventyConfig) {
  // Copy the css, js, and images folders to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
