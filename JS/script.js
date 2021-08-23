
function addNew() {
  let todoList = document.getElementById('todoList');
  let newListItem = document.createElement("li");
  
  todoList.appendChild(newListItem);
  
  let newTask = document.getElementById('inputNew').value;

  

  newListItem.innerHTML = newTask;
  

}
 const node = document.createTextNode("oh no i have gone wrong")