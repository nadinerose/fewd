var form = document.querySelector("#new-item-form");
var toDoList = document.querySelector("#todo-list");
var newTask = document.querySelector("#new-item-input");

// Type in task
// Press Enter and task is listed
// Click on task and task is checked off and crossed off
// Click on task and task gets unchecked and uncrossed

function createTask(todo) {

  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  var span = document.createElement("span");

 checkbox.setAttribute("type","checkbox");
 span.textContent = todo;

 label.appendChild(checkbox);
 label.appendChild(span);
 listItem.appendChild(label);
 toDoList.appendChild(listItem);

}

function formSubmitted(event) {
  event.preventDefault();

  newTask.value.split(",").forEach(createTask);

  form.reset();

  localStorage.setItem("listHTML", toDoList.innerHTML);
}

form.addEventListener("submit", formSubmitted);

toDoList.innerHTML = localStorage.getItem("listHTML");

// WHEN the page laods
// - Look in localStorage to see if the HTML for the list is there
// - IF the HTML is there
// - Set the HTML of the list of the HTML in localStorage
// list.innerHTML = localStorage.getItem("listHTML")

//When the user adds an item
// - Do all the normal stuff
// - ONce the item is aded to the list
// - Save the HTML of the list to localStorage
// localStorage.setItem("listHTML", list.innerHTML)
