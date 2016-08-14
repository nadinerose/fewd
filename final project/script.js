// Actions still to be completed:
// WHEN the response comes back, background is white (CSS)

//Defined initial variables for news search - form, input & results
var form = document.querySelector("#news-search-form");
var input = document.querySelector("#new-item-input");
var newResult = document.querySelector("#news-list");

// WHEN user inputs keyword and clicks search get the value of the input
// WHEN user inputs keyword and clicks search make an http request for the news api database
function submitSearch(event) {
  event.preventDefault();
  var token = "69ea4e2e072746769631019c02d5f877";

//Added API from Bing for Search/News (copy/paste)
  var params = {
          // Request parameters
          "q": input.value,
          "count": "9",
          "offset": "0",
          "mkt": "en-us",
          "safeSearch": "Moderate",
      };

      $.ajax({
          url: "https://api.cognitive.microsoft.com/bing/v5.0/news/search?" + $.param(params),
          headers: { "Ocp-Apim-Subscription-Key" :token },
          type: "GET",
          success: showResults,
// WHEN the response comes back parse the JSON string response
          dataType: "json"
      });
}

function showResults(newsInfo) {
  document.querySelector("#news-list").textContent="";
  newsInfo.value.forEach (listNews);
  $('.favorites_popup_open').show();
}

// WHEN the response comes back create a list of responses
function listNews (post) {
  // Results load in 9 tiles
    var listItem = document.createElement("li");
    listItem.classList.add("news-tile");

// WHEN user clicks news title or tile, link syncs to news source for the specific article
    var link = document.createElement("a");
    link.setAttribute("href", post.url);

  // Tiles have title, description, and photo
    link.classList.add("news-title");
    link.textContent = post.name;

    var image = document.createElement("img");
    image.setAttribute("src",post.image.thumbnail.contentUrl);
    image.classList.add("news-image");

    var description = document.createElement("div");
    description.textContent = post.description;
    description.classList.add("description");

    //Create variable for icon that indicates if article is a favorite
    var icon = document.createElement("img");
    icon.setAttribute("src","blueheart.png");
    icon.classList.add("news-icon");

    listItem.appendChild(image);
    listItem.appendChild(link);
    listItem.appendChild(description);
    listItem.appendChild(icon);

    document.querySelector("#news-list").appendChild(listItem);

    // WHEN user clicks favorite icon, result is added to an array
    icon.addEventListener ("click", function() {
      if(icon.getAttribute("src") == "blueheart.png") {
        icon.setAttribute("src","navyheart.png");
        newsFavorites.push(post);
      }
      else {
        var index = newsFavorites.indexOf(post);
        icon.setAttribute("src","blueheart.png");
        if (index > -1) {
          newsFavorites.splice(index, 1);
        }
      }
    });
}
//Create variable for favorite news item array
var newsFavorites = [];

// WHEN user clicks link to list of favorites, pop-up appears with list
//Pop-up plugin
$(document).ready(function() {

  // Initialize the plugin
  $('#favorites_popup').popup({
    beforeopen: populateFavoritesList
  });

  var facebookButton = document.querySelector("#share_to_facebook");
  facebookButton.addEventListener("click", shareFavorites)

});

//WHEN pop up opens there is a list of favorite articles
function populateFavoritesList () {
  document.querySelector("#favorites-list").textContent="";
  newsFavorites.forEach (listFavorite);
}

function listFavorite (fav) {
  var favItem = document.createElement("li");
  favItem.classList.add("#favorites_popup");

  var link = document.createElement("a");
  link.setAttribute("href", fav.url);

  link.classList.add("fav-title");
  link.textContent = fav.name;

  favItem.appendChild(link);

  document.querySelector("#favorites-list").appendChild(favItem);
}

function shareFavorites() {
  FB.login(function(){
    // Note: The call will only work if you accept the permission request
    FB.api('/me/feed', 'post', {message: 'Hello, world!'});
  }, {scope: 'publish_actions'});

}

// Get request
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
