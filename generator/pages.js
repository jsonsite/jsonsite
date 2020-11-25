var md = require('markdown-it')();
module.exports = function(page){
 
  var i = 0;
  var html = ""
  var obj = [];
  while (i < page.length){
    obj.push(page[i].id)
    html = html + `<div id="${page[i].id}" hidden="true"><h3 class="page-title">${page[i].title}</h3>
    ${md.render(page[i].content)}
    </div>
    `
    i++
  }
  html = html + `<script>var ids = ${JSON.stringify(obj)}</script>`
  return html;
}