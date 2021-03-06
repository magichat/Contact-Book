var app = new Vue({
    el: '#app',
    data: {
        results: [],
        fullData: [],
        globalVar: {
            pageCount: 0
        }
      },
      methods: {
        fullDataSet: function (targetDataSet) {
            this.fullData = targetDataSet;
            document.getElementsByClassName("popup")[0].classList.remove("popup__hide");
        },
        hidePopup: function () {
            document.getElementsByClassName("popup")[0].classList.add("popup__hide");
        },
        next: function () {
            console.log("pageCount: " + this.globalVar.pageCount);
            this.globalVar.pageCount += 4;
            console.log("pageCount: " + this.globalVar.pageCount);
        },
        back: function () {
            if(this.globalVar.pageCount != 0){
                console.log("pageCount: " + this.globalVar.pageCount);
                this.globalVar.pageCount -= 4;
                console.log("pageCount: " + this.globalVar.pageCount);
            }
        }
      },
      mounted() {
        // axios.get("https://randomapi.com/api/7uhi29ps?key=L65B-46NZ-LQF5-BP1G&results=20&page=4")
        axios.get("../lib/offline-json.json")
        .then(response => {this.results = response.data.results})
    }
})