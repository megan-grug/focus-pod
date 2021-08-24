
function addNew() {
  let inputBox = document.getElementById('inputBox');
  let todoList = document.getElementById('todoList');
  let newListItem = document.createElement("li");
  
  todoList.appendChild(newListItem);
  let inputValue = document.getElementById('inputBox').value;
 // let newTask = document.getElementById('inputBox').value;

  newListItem.innerHTML = inputBox.value;
  `<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input> 
  <button class="editBtn"><i class="fas fa-edit"></i></button>
  <button class="deleteBtn"><i class="fas fa-trash-alt"></i></button>`;
  
  inputBox.value = " ";
}
 