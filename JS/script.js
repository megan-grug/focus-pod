
let listOfThings = [];


//function to add the text from the input box to the todolist as a new todo item
function addNew() 
{ let inputBox = document.getElementById('inputBox');
  let todoList = document.getElementById('todoList');
  let newListItem = document.createElement("li");
  let pendingTasks = document.getElementById('pendingTasks');
  todoList.appendChild(newListItem);
  
  newListItem.innerHTML = `<p>`+ inputBox.value + `</p>` +
  `<input class="form-check-input" type="checkbox" value="" aria-label="..." onclick="completeTask"></input> 
  <button class="editBtn"><i class="fas fa-edit"></i></button>
  <button class="deleteBtn"><i class="fas fa-trash-alt"></i></button>`;
  listOfThings.push(newListItem.innerHTML);
  console.log(listOfThings);
  inputBox.value = " ";
  pendingTasks.innerHTML = `<p>` + listOfThings.length + `</p>`;
};

//darkMode function from W3 Schools (https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
function darkMode() 
{
  var element = document.body;
  element.classList.toggle("dark-mode");
//code to swap moon and sun images my own
  if(document.getElementById("satellite").classList.contains('moon'))
  document.getElementById("satellite").className = "sun superbutton";
  
  else document.getElementById("satellite").className = "moon superbutton";
};

//function to slide the to do list up and down
$(document).ready(function()
{
  $("#downarrow").click(function()
  {
    $("#main-todo").slideToggle();
  })
})

//function to hide/reveal rainsounds player
$(document).ready(function()
{
  $("#raincloud").click(function()
  {
    $("#rainsounds").slideToggle();
  })
})



//function to delete task when bin icon is pressed
function deleteTask(e)
{
  const deleteBtn = document.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", deleteTask);
  const thisItem = e.target;
  thisItem.remove;
};


function completeTask(e)
{
  const checkBox = document.querySelector(".form-check-input");

  checkBox.addEventListener("click", completeTask);
  const thisItem = e.target;
  thisItem.classList.toggle(".completed");
};