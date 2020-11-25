var urls = Object.keys(require("./sites.js"));
var config = require("./config.js");
var sites = require("./sites.js");
var request = require("sync-request");
const fs = require("fs");
var reqsettings = {
  headers: {
    "user-agent": "example-user-agent"
  }
};
var i = 0;
// Loop through all of the sites and get data
while (i < urls.length) {
  // Fetch site
  var data = request("GET", urls[i], reqsettings)
    .getBody()
    .toString();
  var html = "";
if(!data.title || !data.description || typeof data.pages !== "object"){
  console.error(`Skipping ${urls[i]} because a required field was missing...`)
  continue;
}
  // Parse data
  data = JSON.parse(data);
  // generate metatags
  html = require("./generator/metatags.js")(
    data.title || "",
    data.description || "",
    `${config.hostname}/${sites[urls[i]]}`,
    data.image
  );
  // Generate "pages", really just javascript
  html = html + require("./generator/pages.js")(data.pages);
  // The main page switcher.
  html = html + require("./generator/logic.js")();
  // Custom CSS and JavaScript
  html =
    html +
    require("./generator/custom.js")(data.javascript || "", data.css || "");
  console.log(html);
  i++;
}
