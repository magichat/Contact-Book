var app = new Vue({
    el: '#app',
    data: {
        results: []
      },
      mounted() {
        // axios.get("https://randomapi.com/api/7uhi29ps?key=L65B-46NZ-LQF5-BP1G&results=20&page=4")
        axios.get("../lib/offline-json.json")
        .then(response => {this.results = response.data.results})
    }
})