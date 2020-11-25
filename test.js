const nunjucks = require("nunjucks");
const fs = require("fs")
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

  data = JSON.parse(data)
nunjucks.configure({ autoescape: true });
console.log(nunjucks.renderString(fs.readFileSync("./templates/index.html", "utf8"), data));

  i++;
  
}
