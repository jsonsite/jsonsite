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

  // Parse data
  data = JSON.parse(data);
  // html wrapper
  html = `<html lang="en"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`
  // generate metatags
  html = html + require("./generator/metatags.js")(
    data.title || "",
    data.description || "",
    `${config.hostname}/${sites[urls[i]]}`,
    data.image
  );
  // Generate "pages", really just javascript. pages.js makes the html for pages and logic.js is for css and the js that makes the js work
  html = `${html}<body><h1 class="siimple-h1">${data.title || ""}</h1><p class="siimple-p">
  ${data.description}</p><hr>${require("./generator/pages.js")(data.pages)}${require("./generator/logic.js")()}</body>`
  // Custom CSS and JavaScript
  html =
    html +
    require("./generator/custom.js")(data.javascript || "", data.css || "");
  
  // Compress HTML to improve speed
  html = require("./generator/minify.js")(html);
  // Write the data to file
  fs.writeFileSync(`./pages/${sites[urls[i]]}.html`, html);
  console.log(`Generated ${sites[urls[i]]}.html from ${urls[i]}`)
  i++;
}
