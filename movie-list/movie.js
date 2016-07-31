var form = document.querySelector("#movie-search-form");
var input = document.querySelector("#new-item-input");
var newResult = document.querySelector("#movie-list");


function submitSearch(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + input.value;
  get(url,listMovie);

}

function showResults(data) {
  var movieInfo = JSON.parse(data);
  //document.querySelector("#movie-list").textContent = movieInfo.Search;
  //document.querySelector("#movie-list").appendChild(movieInfo);
  movieInfo.Search.forEach (listMovie);

}
function listMovie (movie) {
    var listItem = document.createElement("li");
    listItem.textContent = movie.Title;
    //listItem.textContent = movie.Year;
    var link = document.CreateElement("a");
    link.setAttribute("href","http://imbd.com/?=");
    var title = document.createElement("")



}

function get(url, callback) {
  var request = new XMLHttpRequest();

  request.open("GET", url, true);

  request.addEventListener("readystatechange", handleReadyStateChange)

  function handleReadyStateChange() {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.responseText);
    }
  };

  request.send();
}

form.addEventListener ("submit", submitSearch);
