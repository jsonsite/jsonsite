const nunjucks = require("nunjucks");
const fs = require("fs");
var urls = Object.keys(require("./sites.js"));
var config = require("./config.js");
var sites = require("./sites.js");
var request = require("sync-request");
var minify = require("html-minifier").minify;
var md = require("markdown-it")();
var validator = require('validator');
var i = 0;
var reqsettings = {
  headers: {
    "user-agent": "JSONsite (https://support.glitch.com/t/34718)"
  }
};
while (i < urls.length) {
  if(!fs.existsSync(`./pages/site/${sites[urls[i]]}/`)){
fs.mkdirSync(`./pages/site/${sites[urls[i]]}/`)
}
  var y = 0;
  var data = request("GET", urls[i], reqsettings)
    .getBody()
    .toString();

  data = JSON.parse(data);
  while (y < data) {
    data.pages[y].content = md.render(data.pages[y].content);
    y++;
  }
  var template = ""
  // If template and if it is valid, use it!
if (data.template && validator.isURL(data.template)){
template = request("GET", `https://jsonsite.github.io/templates/${data.template}`, reqsettings)
    .getBody()
    .toString();
} else {
  // Else use the default.
template = fs.readFileSync("./templates/index.html", "utf8")
}
  nunjucks.configure({ autoescape: true });
  data = Object.assign(data, {
    siimple: fs.readFileSync(
      "node_modules/siimple/dist/siimple.min.css",
      "utf8"
    )
  });
  var res = nunjucks.renderString(
    template,
    data
  );
  res = minify(res, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true
  });
  fs.writeFileSync(`./pages/site/${sites[urls[i]]}/index.html`, res);
  console.log(`Generated ${sites[urls[i]]}/index.html from ${urls[i]}`);
  i++;
}
fs.writeFileSync(`./pages/index.html`, fs.readFileSync("./views/index.html", "utf8"));