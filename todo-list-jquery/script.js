var form = $("#new-item-form");
var toDoList = $("#todo-list");
var newTask = $("#new-item-input");

function createTask (todo) {
  var listItem = $("<li>");
  var checkbox = $("<input>").attr("type","checkbox");
  var label = $("<label>");
  var span = $("<span>").text(todo);

  label.append(checkbox);
  label.append(span);
  listItem.append(label);
  toDoList.append(listItem);
}

function formSubmitted(event) {
  event.preventDefault();

  newTask.val().split(",").forEach(createTask);
  form[0].reset();

}

form.on("submit", formSubmitted);
