// This file provides metatags and the stylesheets
const fs = require('fs'); 
module.exports = function(title, desc, url, image) {
  return `<html lang="en">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <head><!-- Generated with metatags.io! --><!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${desc}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${image}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url}">
<meta property="twitter:title" content="${title}">
<meta property="twitter:description" content="${desc}">
<meta property="twitter:image" content="${image || ""}">
<style>$fs.readFileSync()</style>
</head>`;
};
