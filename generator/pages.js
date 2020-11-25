var md = require('markdown-it')();
module.exports = function(page){
 
  var i = 0;
  var html = ""
  var obj = [];
  while (i < page.length){
    obj.push(page[i].id)
    html = html + `<div id="${page[i].id}" hidden="true"><h3 class="siimple-h3 page-title">${page[i].title}</h3>
    <div class="siimple-p">${md.render(page[i].content)}</div>
    </div>
    `
    i++
  }
  html = html + `<script>var ids = ${JSON.stringify(obj)}</script>`
  return html;
}