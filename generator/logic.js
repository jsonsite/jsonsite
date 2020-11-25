module.exports = function(){
  return `<script>if(location.hash.substr(1) == ""){
   location.hash = "main"
  }
  if(!ids.includes(location.hash.substr(1))){
 var div = document.createElement("div");
  div.innerHTML = "<h1>Whoops!</h1><br><p>That page could not be found. Would you like to go back <a href="#home">home?</a></p>";
  document.body.appendChild(div);
  }
  document.getElementById(location.hash.substr(1)).hidden = false</script>`
}