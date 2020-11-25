var urls = Object.keys(require("./sites.js"));
var config = require("./config.js");
var sites = require("./sites.js");
var request = require("sync-request");
const fs = require("fs");
var i = 0;
// Loop through all of the sites and get data
while (i < urls.length) {
  // Fetch site
  var data = request("GET", urls[i], {
    headers: {
      "user-agent": "example-user-agent"
    }
  })
    .getBody()
    .toString();
  // Parse data
  data = JSON.parse(data);
  // generate metatags
  data = require("./generator/metatags.js")(
    data.title || "",
    data.description || "",
    `${config.hostname}/${sites[urls[i]]}`,
    data.image
  );
  console.log(data);
  i++;
}
