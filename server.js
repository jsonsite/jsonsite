const express = require("express");
const app = express();
const fs = require("fs");

app.set("x-powered-by", false);
app.set("views", __dirname + "/src");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/indec.htm;")
});
app.get("/site/:page", (req, res) => {
  res.set('Cache-Control', 'max-age=3600');

  console.log(`./pages/${req.params.page}.html`)
  if (fs.existsSync(`./pages/${req.params.page}.html`)) {
    res.sendFile(__dirname + `/pages/${req.params.page}.html`)
  } else {
    res.send("Whoops! That JSONsite was not found. Sorry :/").status(404)
  }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
