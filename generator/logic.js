// This is the main logic, it switches/displays pages and loads CSS
module.exports = function() {
  return `<script>if(location.hash.substr(1) == ""){
   location.hash = "main"
  }
  if(!ids.includes(location.hash.substr(1))){
 var div = document.createElement("div");
  div.innerHTML = '<h1 class="404-title">Whoops!</h1><br><p class="404-description">That page could not be found. Would you like to go back <a href="#main">home?</a></p>';
  document.body.appendChild(div);
  }
  document.getElementById(location.hash.substr(1)).hidden = false</script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple@3.3.1/dist/siimple.min.css">
`;
};
