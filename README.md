# JSONsite

JSONsite allows you to take a JSON file and turn it into a SPA with mini pages. 
Basically, you add your JSON file (you can put it on something like GitHub Gists or Pastebin) and JSONsite will fetch t

```json
{
  "title": "John's Website",
  "description": "The amazing website of John Doe",
  "image": "https://cdn.glitch.com/1788ed8a-5cc6-45e9-a3b6-18d6457af699%2Fundraw_profile_pic_ic5t.png?v=1606325421049",
  "author": "John Doe",
  "pages": [
    {
      "title": "Main",
      "id": "main",
      "content": "This is the main secton."
    },
    {
      "title": "About",
      "id": "about",
      "content": "My Name is John Doe! I like playing the violin."
    },
    {
      "title": "Contact",
      "id": "contact",
      "content": "You can contact me here [here](mailto:john@example.com)."
    }
  ],
  "footer": "&copy; 2020 John Doe. All Rights Reserved.",
  "javascript": "console.log('Oooh look, custom JavaScript!')",
  "css": "/* You can put custom CSS here! */"
}
```
