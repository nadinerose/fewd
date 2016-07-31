var form = document.querySelector("#movie-search-form");
var input = document.querySelector("#new-item-input");
var newResult = document.querySelector("#movie-list");


function submitSearch(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + input.value;
  get(url, showResults);

}

function showResults(data) {
  var movieInfo = JSON.parse(data);
  document.querySelector("#movie-list").textContent="";
  movieInfo.Search.forEach (listMovie);


}
function listMovie (movie) {
    var listItem = document.createElement("li");

    var link = document.createElement("a");
    link.setAttribute("href","http://imdb.com/title/"+ movie.imdbID);
    link.classList.add("movie-title");
    link.textContent = movie.Title;

    var year = document.createElement("div");
    year.textContent = movie.Year;

    listItem.appendChild(link);
    listItem.appendChild(year);

    document.querySelector("#movie-list").appendChild(listItem);

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
