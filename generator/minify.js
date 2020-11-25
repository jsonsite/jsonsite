module.exports = function(html) {
  var minify = require("html-minifier").minify;
  return minify(html, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  });
};
