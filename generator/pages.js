var md = require('markdown-it')();
module.exports = function(page){
 
  var i = 0;
  var html = ""
  while (i < page.length){
    html = html + `<div id="${page[i].id}"><h1 class="page-title">${page[i].title}</h1>
    ${md.render(page[i].content)}
    </div>
    `
    i++
  }
  return html;
}