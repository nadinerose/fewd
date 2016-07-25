var stopButton = document.querySelector ("#stopbutton");
var slowButton = document.querySelector ("#slowbutton");
var cautionButton = document.querySelector ("#cautionbutton");
var goButton = document.querySelector ("#gobutton");

var lightStop = document.querySelector ("#stoplight");
var lightSlow = document.querySelector ("#slowlight");
var lightGo = document.querySelector ("#golight");

var refreshInterval;

function stop () {
  lightStop.classList.add("stop");
  lightSlow.classList.remove("slow");
  lightGo.classList.remove("go");
  clearInterval(refreshInterval);
}
  stopButton.addEventListener("click",stop);

function slow () {
  lightStop.classList.remove("stop");
  lightSlow.classList.add("slow");
  lightGo.classList.remove("go");
  clearInterval(refreshInterval);
}
slowButton.addEventListener("click",slow);

function go () {
  lightStop.classList.remove("stop");
  lightSlow.classList.remove("slow");
  lightGo.classList.add("go");
  clearInterval(refreshInterval);
}
goButton.addEventListener("click",go);

function caution () {
  lightStop.classList.remove("stop");
  lightGo.classList.remove("go");

  refreshInterval = setInterval(toggleSlow, 1000);
}
cautionButton.addEventListener("click",caution);

function toggleSlow () {
  if(lightSlow.classList.contains("slow")) {
    lightSlow.classList.remove("slow");
  }
else {
    lightSlow.classList.add("slow");
  }
}
