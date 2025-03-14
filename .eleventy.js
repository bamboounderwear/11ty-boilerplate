// .eleventy.js
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Add an async image shortcode for Nunjucks templates
  eleventyConfig.addNunjucksAsyncShortcode("image", async function (src, alt, outputFormat = "jpeg") {
    // Use the original image dimensions by passing [null] for widths
    let stats = await Image(src, {
      widths: [null],
      formats: [outputFormat],
      urlPath: "/images/",
      outputDir: "./dist/images/"
    });
    
    // Since we're only generating one variant, select the first (and only) result.
    let imageData = stats[outputFormat][0];
    return `<img src="${imageData.url}" width="${imageData.width}" height="${imageData.height}" alt="${alt}">`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
