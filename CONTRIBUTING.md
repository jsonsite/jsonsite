# JSONsite
JSONsite allows you to take a JSON file and turn it into a SPA with mini pages.

### How to add your JSON file:
1. Make a fork of this repo [here](https://github.com/jsonsite/jsonsite)
2. Modify the `sites.js` file and add the the url as a key and the slug as a value. For example:
```
"https://domain.tld/site.json": "myawesomesite"
```
3. Merge the changes back into the repo.
4. When you make your pull request, please label it "Create [slug]", replacing slug with the one you choose in step 2 (in this example `myawesomesite`).
If your JSONsite is accpeted (which it most likely will), JSONsite will fetch the JSON data from `https://domain.tld/site.json` and then your site will be available at jsonsite.vercel.app/site/myawesomesite
