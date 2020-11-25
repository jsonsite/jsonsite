const express = require("express");
const app = express();
app.set("x-powered-by", false);
app.set("views", __dirname + "/src");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Welcome!" });
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
