// .eleventy.js
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Add an async image shortcode for Nunjucks templates
  eleventyConfig.addNunjucksAsyncShortcode("image", async function (src, alt, outputFormat = "jpeg") {
    // Process the image with different widths (adjust as needed)
    let stats = await Image(src, {
      widths: [300, 600],
      formats: [outputFormat],
      urlPath: "/images/",
      outputDir: "./dist/images/"
    });
    // Use the smallest image for the src attribute
    let props = stats[outputFormat][0];
    return `<img src="${props.url}" width="${props.width}" height="${props.height}" alt="${alt}">`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
