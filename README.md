# Contact-Book
This is a contact book. Pulls in a buch of data and displays it as a list of address book contacts.

Done in SCSS (SASS) and Vue.js also sometimes HTML.

Users CSS `grid`, so IE ~~may not~~ definitely will not like it. In a real world release of the project this would be fixed with a flexbox / float fallback.

In this *test* build, the app is pulling from `lib/offline-json.json` however this can be swaped out for `app/appcode.js` to use data from the online api. This is done to save on daily limits on the fake data api.