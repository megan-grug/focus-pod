let listOfThings = [];

//function to add the text from the input box to the todolist as a new todo item
function addNew() 
{ 
  let inputBox              = document.getElementById('inputBox');
  if (inputBox.value !== " ") 
  {
    
    let todoList            = document.getElementById('todoList');

    let newListItem         = document.createElement("div");            //creates the div for the new task
    let newTask             = document.createElement("li");             //creates the li for the new task
    todoList.appendChild(newListItem);                                  //puts the div into the todolist
    newListItem.appendChild(newTask);                                   //puts the li into the new task div
    newTask.innerHTML       = inputBox.value;                           //gives the li a value of whatever user typed in input
  
    let deleteBtn           = document.createElement("button");         //creates button (to become deleteBtn)
    deleteBtn.innerHTML     = `<i class= "fas fa-trash-alt"></i>`;      //adds the icon making html to the button
    newTask.insertAdjacentElement('beforeend', deleteBtn);              //places the deleteBtn inside the li
    deleteBtn.classList.add(".deleteBtn");
    deleteBtn.addEventListener("click", deleteTask);

    let checkBox = document.createElement("button");                    //creates button (to become deleteBtn)
    checkBox.innerHTML      = `<i class = "fas fa-check"></i>`;         //adds the icon making html to the button
    newTask.insertAdjacentElement('beforeend', checkBox);               //places the checkBox inside the li
    checkBox.classList.add(".checkBox");
    checkBox.addEventListener("click", completeTask);
    
    listOfThings.push(newListItem.innerHTML);
    console.log(listOfThings);
    inputBox.value          = " ";                                      //clears the input box
    
    let pendingTasks        = document.getElementById('pendingTasks');
    
    if (listOfThings.length > 1) 

    {
      let thing = "things";    
      pendingTasks.innerHTML  = `<p>` + listOfThings.length + `</p>`;
      let thingSpan           = document.getElementById('thingSpan');
      thingSpan.innerHTML     = `<p>` + thing + `</p>`;
    }

    else if (listOfThings.length === 1)
    {
      let thing = "thing";
      pendingTasks.innerHTML  = `<p>` + listOfThings.length + `</p>`;
      let thingSpan           = document.getElementById('thingSpan');
      thingSpan.innerHTML     = `<p>` + thing + `</p>`;
    }
  }
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


//function to delete task when bin icon is pressed - WORKING
function deleteTask()
{
  this.parentNode.parentNode.remove();
  listOfThings.pop();
  console.log(listOfThings);
  
  if (listOfThings.length > 1) 
  {
    let thing = "things";    
    pendingTasks.innerHTML  = `<p>` + listOfThings.length + `</p>`;
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + thing + `</p>`;
  }

  else if (listOfThings.length === 1)
  {
    let thing = "thing";
    pendingTasks.innerHTML  = `<p>` + listOfThings.length + `</p>`;
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + thing + `</p>`;
  }

  else if (listOfThings < 1)
  {
    let thing = "nothing";
    pendingTasks.innerHTML  = " ";
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + thing + `</p>`;
  }
};

//function to add strikethrough styling if checkbox is ticked
function completeTask()
{
  this.parentNode.classList.toggle("completed");
};

//function for 'give up' button

function giveUp()
{
  listOfThings.splice(0, listOfThings.length);
  console.log(listOfThings);
  let thing = "nothing";
  pendingTasks.innerHTML  = " ";
  let thingSpan           = document.getElementById('thingSpan');
  thingSpan.innerHTML     = `<p>` + thing + `</p>`;
  alert("Congratulations! You have cast aside the capitalist notion that our worth is based on our productivity! Rejoice and embrace the simple joy of being.");
};
