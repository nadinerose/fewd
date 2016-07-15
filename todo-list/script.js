var form = document.querySelector("#new-item-form");
var toDoList = document.querySelector ("#todo-list")

function formSubmitted(event) {
  event.preventDefault();

  // Your code goes here...
  // Type in task
  // Press Enter and task is listed
  // Click on task and task is checked off and crossed off
  // Click on task and task gets unchecked and uncrossed

    var newTask = document.createElement("div");
    form.textContent = toDoList.value;
    toDoList.classList.add ("form");
    buttonish.appendChild(form);

  form.reset();
}

form.addEventListener("submit", formSubmitted);
