var md = require('markdown-it')();
module.exports = function(page){
  var i = 0;
  var html = ""
  while (i < page.length){
    html = html + `<div id="${page[i]}"><h1 class="page-title">${page[i].title}</h1>
    <a name="${page[i]}"></a>
    ${md.render(page[i].content)}
    </div>
    `
    i++
  }
}