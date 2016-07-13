//Declare a variable that represents the like link
var link = document.querySelector(".like-link");
//Declares a variable that represents the span
var form = document.querySelector("#new-comment");
//Declares a variable that represents the body for comments
var commentBody = document.querySelector("#new-comment-body")
//Declares a variable that adds the likes
var likeCount = document.querySelector(".like-count");
var comments = document.querySelector("#comments")

link.addEventListener("click", like);
form.addEventListener("submit", comment);


function like(event) {
  event.preventDefault();
  var count = parseInt (likeCount.textContent);
  likeCount.textContent = count+1;
}

function comment(event) {
  event.preventDefault();
  var comment1 = document.createElement("div"); //identifying new comment
  comment1.textContent = commentBody.value;
  comment1.classList.add ("comment");
  comments.appendChild(comment1);
  form.reset();

}
