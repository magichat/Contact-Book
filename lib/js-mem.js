// Gets data from randomapi.com and pulls it in to use.

// BB

var apiURL = "https://randomapi.com/api/7uhi29ps?key=L65B-46NZ-LQF5-BP1G"

var request = new XMLHttpRequest();

request.open("GET", apiURL, true);

request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
}

request.send();