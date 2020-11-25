module.exports = function minify(req, res, next) {
  res.send = function(data){
    var minify = require('html-minifier').minify;
var result = minify('<p title="blah" id="moo">foo</p>', {
  removeAttributeQuotes: true
});

  }
  next();
};