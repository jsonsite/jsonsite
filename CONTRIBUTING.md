# JSONsite
JSONsite allows you to take a JSON file and turn it into a SPA with mini pages.

### How to add your JSON file:
1. Make a fork of this repo [here](https://github.com/jsonsite/jsonsite)
2. Modify the `sites.js` file and add the the url as a key and the slug as a value. For example:
```
"https://domain.tld/site.json": "myawesomesite"
```
will fetch the JSON data from `https://domain.tld/site.json` and then your 