# Contact-Book
This is a contact book. Pulls in a buch of fake data and displays it as a list of contacts.

Done in SCSS(SASS) and Vue.js also sometimes HTML.

Users css grids so IE may not like it. In a full release this would be fixed with a flexbox / float fall back.

In test build app is pulling from `lib/offline-json.json` however this can be swaped out in `app/appcode.js` to use data from the online api. This is done to save on daily limits.