const express = require("express");
const app = express();
const fs = require("fs");

app.set("x-powered-by", false);
app.set("views", __dirname + "/src");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Welcome!" });
});
app.get("/site/:page", (req, res) => {
  
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
