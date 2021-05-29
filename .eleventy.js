const inspect = require("util").inspect;

module.exports = (eleventyConfig, options = {}) => {
  options = Object.assign({
    space: 0
  }, options);

  eleventyConfig.addFilter("inspect", inspect);
  eleventyConfig.addFilter("json", (obj, space = options.space) => JSON.stringify(obj, null, space));
  eleventyConfig.addFilter("keys", obj => Object.keys(obj).sort());
};
