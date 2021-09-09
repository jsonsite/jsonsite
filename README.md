# JSONsite

JSONsite allows you to take a JSON file and turn it into a SPA with mini pages.
Basically, you add your JSON file (you can put it on something like GitHub Gists or Pastebin)
and JSONsite will fetch it an convert it into a full Website. Your JSON file could look like this:

```json
{
  "title": "John's Website",
  "description": "The amazing website of John Doe",
  "image": "https://cdn.glitch.com/1788ed8a-5cc6-45e9-a3b6-18d6457af699%2Fundraw_profile_pic_ic5t.png?v=1606325421049",
  "author": "John Doe",
  "template": "default.njk",
  "theme": {
    "navbar-color": "dark",
    "jumbotron-color": "light",
    "footer-color": "light"
  },
  "pages": [
    {
      "title": "Main",
      "id": "main",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus. Maecenas ultricies mi eget mauris pharetra et ultrices. Nunc consequat interdum varius sit. Suspendisse sed nisi lacus sed. Tempor id eu nisl nunc mi ipsum faucibus vitae. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Interdum velit laoreet id donec ultrices tincidunt arcu non. Et netus et malesuada fames. Ipsum faucibus vitae aliquet nec ullamcorper sit. Ultricies mi eget mauris pharetra et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Dolor sit amet consectetur adipiscing. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Ac tincidunt vitae semper quis lectus nulla at. Odio ut sem nulla pharetra diam sit amet. Viverra adipiscing at in tellus."
    },
    {
      "title": "About",
      "id": "about",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus accumsan tortor posuere ac ut consequat semper viverra. Pharetra magna ac placerat vestibulum lectus mauris. Scelerisque in dictum non consectetur a erat nam at lectus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Gravida in fermentum et sollicitudin. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet mauris commodo quis. Bibendum enim facilisis gravida neque convallis a. Quis imperdiet massa tincidunt nunc pulvinar. Leo a diam sollicitudin tempor id. Sit amet facilisis magna etiam. Pharetra sit amet aliquam id diam maecenas ultricies. Nulla at volutpat diam ut venenatis tellus. Eget lorem dolor sed viverra ipsum nunc. Lobortis scelerisque fermentum dui faucibus in. Amet cursus sit amet dictum sit amet justo donec enim. Posuere urna nec tincidunt praesent semper feugiat."
    },
    {
      "title": "Contact",
      "id": "contact",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue ut lectus arcu bibendum at varius. Hac habitasse platea dictumst vestibulum rhoncus est. Tincidunt vitae semper quis lectus nulla at volutpat diam. Eu non diam phasellus vestibulum lorem sed risus ultricies. Posuere lorem ipsum dolor sit amet consectetur. Mauris sit amet massa vitae tortor. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Diam volutpat commodo sed egestas egestas. Orci sagittis eu volutpat odio facilisis. Dui ut ornare lectus sit amet. Nisl vel pretium lectus quam id leo in vitae turpis. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Arcu non sodales neque sodales ut etiam sit amet. Scelerisque purus semper eget duis at. Ac turpis egestas sed tempus urna et pharetra. Platea dictumst quisque sagittis purus."
    }
  ],
  "footer": "&copy; 2020 John Doe. All Rights Reserved.",
  "javascript": "console.log('Oooh look, custom JavaScript!');",
  "css": "/* You can put custom CSS here! */"
}
```

And it will generate something like this:
![Example of JSONsite](https://file.coffee/u/tpIhNT-8lG.png)

All on one page, one site. The "pages" are switched are JavaScript, but since they are all on one page, it is **super** fast.

Settings/content for your site:

```json
{
  "title": "[Title of Website]",
  "description": "[Description of the website.]",
  "image": "[Image for website, Only used for image.]",
  "author": "[Author who made the website (a.k.a your name)]",
  "template": "[path/to/template]",
  "theme": {
    "navbar-color": "dark",
    "jumbotron-color": "light",
    "footer-color": "light"
  },
  "pages": [
    {
      "title": "[Title of Page]",
      "id": "[ID of the page. Please make sure one page contains a 'main' id.]",
      "content": "[Content of page. Markdown Supported.]"
    }
  ],
  "footer": "[Footer, such as 'Made with ♥ by John' or 'Copyright User 2020.']",
  "javascript": "/* Custom JavaScript for stuff like Google analytics */",
  "css": "/* Custom CSS for styling elements. */"
}
```

**Notes:**

- Theme colors are words, not color codes. You can see all of the color codes [here](https://docs.siimple.xyz/getting-started/theming.html). These are the default and **is not required**.
- Pages are pages and they support Markdown and HTML.
- Templates can comes from [jsonsite/templates](https://github.com/jsonsite/templates) for security reasons. If the template URL is [jsonsite.github.io/templates/default.njk](https://jsonsite.github.io/templates/default.njk), then the value would be `default.njk`.

Want to add your JSONsite? Make a pull request for `sites.js` and make it with the following format:<br>
`"https://domain.tld/path/to/file.json": "mysite"`<br><br>
If the key is called `https://domain.tld/path/to/file.json` and the value is called `mysite`, then your site would be located at `https://baby-yoda.xyz/s/pages/site/mysite` and data would be pulled from `https://domain.tld/path/to/file.json`.

### How to add your site
See [CONTRIBUTING.md](https://github.com/jsonsite/jsonsite/blob/main/CONTRIBUTING.md)
