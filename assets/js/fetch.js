const testUrl = "https://ghibliapi.herokuapp.com/films"
const baseUrl = "http://timetableapi.ptv.vic.gov.au"
const actualUrl = baseUrl + "/v3/stops/location/-37.751500,144.976310?devid=3000962&signature=2c8d3362b20a4293ecd2d847ca87114163041b16"

//dataset
var obj;

//fetchdata function
function fetchUrl(url){
fetch(url)
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
  .then(function(){
    var div = document.getElementById('dataGoesHere');
    obj.stops.forEach(entry =>{
    div.innerHTML += '<li>' + entry.stop_name + '</li>';
  });
  })
}

//change url here for different data
window.onload = fetchUrl(actualUrl);

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

window.onload = getLocation();
