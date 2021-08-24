
function addNew() {
  let inputBox = document.getElementById('inputBox');
  let todoList = document.getElementById('todoList');
  let newListItem = document.createElement("li");
  
  todoList.appendChild(newListItem);

  let inputValue = document.getElementById('inputBox').value;
 // let newTask = document.getElementById('inputBox').value;

  newListItem.innerHTML = `<p>`+ inputBox.value + `</p>` +
  `<input class="form-check-input" type="checkbox" value="" aria-label="..."></input> 
  <button class="editBtn"><i class="fas fa-edit"></i></button>
  <button class="deleteBtn"><i class="fas fa-trash-alt"></i></button>`;
  inputBox.value = " ";
};

const tickBox = document.getElementsByClassName("form-check-input");

tickBox.onclick = ()=>{
  $(this).prev().addClass("completed");
};

//darkMode function from W3 Schools (https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};
