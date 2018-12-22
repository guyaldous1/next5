const testUrl = "https://ghibliapi.herokuapp.com/films"
const actualUrl = ""

var obj;

function fetchUrl(url){
fetch(url)
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))
  .then(
    var div = document.getElementById('dataGoesHere');
    div.innerHTML += 'Extra stuff';
)
}
//change url here for different data
window.onload = fetchUrl(testUrl);
