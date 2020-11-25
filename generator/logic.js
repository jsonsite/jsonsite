// This is the main logic, it switches/displays pages and loads CSS
module.exports = function() {
  return `<script>function nav(){if(location.hash.substr(1) == ""){
   location.hash = "main"
  }
  if(!ids.includes(location.hash.substr(1))){
 var div = document.createElement("div");
  div.innerHTML = '<h1 class="404-title">Whoops!</h1><br><p class="404-description">That page could not be found. Would you like to go back <a href="#main">home?</a></p>';
  document.body.appendChild(div);
  }
  var i = 0;
  while(i < ids.length){
   document.getElementById(ids[i]).setAttribute("style", "display:none;");
   i++
  }
  document.getElementById(location.hash.substr(1)).setAttribute("style", "display:block;");}
  // Start loading on hash change and on load
  window.onhashchange = nav;
  window.addEventListener('DOMContentLoaded', (event) => {
    nav()
});</script>
`;
};
