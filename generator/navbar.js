module.exports = function(page, title, desc, theme){
  var i = 0;
  var html = `<div class="siimple-navbar siimple-navbar--extra-large siimple-navbar--${theme.navbar_color || "dark"}">
    <a class="siimple-navbar-title">${title}</a>
    <div class="siimple--float-right">` // Start of navbar
  while (i < page.length){ // Loop through pages and add titles
    html = html + `<a class="siimple-navbar-item" href="#${page[i].id}">${page[i].title}</a>`
    i++
  }
  html = html + `</div></div>` // End of navbar
  html = html + `<div class="siimple-jumbotron siimple-jumbotron--fluid siimple-jumbotron--${theme.jumbotron_color || "light"}">
    <div class="siimple-jumbotron-title">${title}</div>
    <div class="siimple-jumbotron-subtitle">${desc}</div>
</div>` // Jumbotron (title and desc)
  return html;
}