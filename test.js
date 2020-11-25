const nunjucks = require("nunjucks");
const fs = require("fs");
var urls = Object.keys(require("./sites.js"));
var config = require("./config.js");
var sites = require("./sites.js");
var request = require("sync-request");
var i = 0;
var reqsettings = {
  headers: {
    "user-agent": "example-user-agent"
  }
};
while (i < urls.length) {
  var data = request("GET", urls[i], reqsettings)
    .getBody()
    .toString();

  data = JSON.parse(data);
  nunjucks.configure({ autoescape: true });
  data = Object.assign(data, {
    siimple: fs.readFileSync("node_modules/siimple/dist/siimple.min.css", "utf8")
  });
  var res = nunjucks.renderString(
    fs.readFileSync("./templates/index.html", "utf8"),
    data
  );
  fs.writeFileSync(`./pages/${sites[urls[i]]}.html`, res);
  console.log(`Generated ${sites[urls[i]]}.html from ${urls[i]}`);
  i++;
}
