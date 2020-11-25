module.exports = function(footer, theme){
  return `<div class="siimple-footer siimple-footer--${theme.footer_color || "light"}" align="center">
    ${footer || ""}
</div>`
}