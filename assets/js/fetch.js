const testUrl = "https://ghibliapi.herokuapp.com/films";
const baseUrl = "https://timetableapi.ptv.vic.gov.au";
const actualUrl = baseUrl + "/v3/stops/location/-37.751500,144.976310?route_types=0&route_types=1&max_distance=2000&devid=3000962&signature=BD1F3AA5272C03C901470822A6B10F54AA96CBC7";

//dataset
var obj;
var myLat;
var myLong;

function printList(){
  var div = document.getElementById('dataGoesHere');
  obj.stops.forEach(entry =>{
  div.innerHTML += '<li>' + entry.stop_name + '</li>';
});
}

//fetchdata function
function fetchUrl(url){
fetch(url)
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    var x = document.getElementById("demo");
    x.innerHTML += "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x = document.getElementById("demo");
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  myLong = position.coords.longitude;
  myLat = position.coords.latitude;
}

window.onload = getLocation();
//change url here for different data
window.onload = fetchUrl(actualUrl);
