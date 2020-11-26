module.exports = function(){
var keys = Object.keys(require("./sites.js"));
var values = require("./sites.js");
const nunjucks = require("nunjucks");
const fs = require("fs")
var x = 0;
var obj = [];
while (x < keys.length) {
  obj.push({ pubfrom: keys[x], slug: values[keys[x]] });
  x++;
}
var template = fs.readFileSync("./templates/sitemap.html", "utf8");
return nunjucks.renderString(template, {sites: obj})
}