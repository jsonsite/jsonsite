var keys = Object.keys(require("./sites.js"));
var values = require("./sites.js");
const nunjucks = require("nunjucks");
const fs = require("fs")
var x = 0;
var obj = [];
while (x < keys.length) {
  obj.push({ title: keys[x], description: values[keys[x]] });
  x++;
}
var template = fs.readFileSync("./templates/sitemap.html", "utf8");
nunjucks.renderString(template, {sites: obj})
