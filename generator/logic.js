module.exports = function() {
  return `<script>if(location.hash.substr(1) == ""){
   location.hash = "main"
  }
  if(!ids.includes(location.hash.substr(1))){
 var div = document.createElement("div");
  div.innerHTML = '<h1 class="404-title">Whoops!</h1><br><p class="404-description">That page could not be found. Would you like to go back <a href="#home">home?</a></p>';
  document.body.appendChild(div);
  }
  document.getElementById(location.hash.substr(1)).hidden = false</script><style>:root {
    font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }</style>`;
};
