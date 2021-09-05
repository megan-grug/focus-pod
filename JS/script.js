let listOfThings = [];

let pendingTasks = null;


function updateTaskCounter(word)
{
pendingTasks.innerHTML  = `<p>` + listOfThings.length + `</p>`;
let thingSpan           = document.getElementById('thingSpan');
thingSpan.innerHTML     = `<p>` + word + `</p>`;
}



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
    newTask.classList.add("tasks");

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
    
    pendingTasks        = document.getElementById('pendingTasks');

    if       (listOfThings.length >   1) { updateTaskCounter("things"); }
    else if  (listOfThings.length === 1) { updateTaskCounter("thing"); }
    else     														 { alert("You don't appear to have typed in a task, you cannot add an empty item to your list."); }
   }
}

//darkMode function from W3 Schools (https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)
function darkMode() 
{
  var element                                         = document.body;
  element.classList.toggle("dark-mode");

//code to swap moon and sun images my own
  if(document.getElementById("satellite").classList.contains('moon'))
  document.getElementById("satellite").className      = "sun superbutton";
  
  else document.getElementById("satellite").className = "moon superbutton";
}

//function to slide the to do list up and down 

$(document).ready(function()
{
  $("#downarrow").click(function()
  {
    $("#main-todo").slideToggle();
  });
});

//function to hide/reveal rainsounds player
$(document).ready(function()
{
  $("#raincloud").click(function()
  {
    $("#rainsounds").slideToggle();
  });
});

//function to hide/reveal gratitude list
$(document).ready(function()
{
  $("#heart").click(function()
  {
    $("#gratitude").slideToggle();
  });
});


//function to delete task when bin icon is pressed - WORKING
function deleteTask()
{
  this.parentNode.parentNode.remove();
  listOfThings.pop();
  console.log(listOfThings);
  
  if       (listOfThings.length >   1) { updateTaskCounter("things");   }
  else if  (listOfThings.length === 1) { updateTaskCounter("thing");    }
  else if  (listOfThings        <   1) { updateTaskCounter("nothing");  }
}

//function to add strikethrough styling if checkbox is ticked
function completeTask()
{
  this.parentNode.classList.toggle("completed");

  if($('.li.completed').length === $('.ul .div').length)
  {
    pendingTasks.innerHTML  = " ";
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + "nothing" + `</p>`;
    alert("Congratulations! You have completed all your tasks. Take a well earned break!");
  }
}



//function for 'give up' button

function giveUp()
{
  if (listOfThings.length > 0)
  {
    ///////- code from Stack Overflow
    listOfThings.splice(0, listOfThings.length);
    console.log(listOfThings);
    Array.prototype.slice.call(document.getElementsByTagName('li')).forEach(
      function(item) {
        item.remove();
        });

    //////////////////////// - end code from Stack Overflow
    let thing               = "nothing";
    pendingTasks.innerHTML  = " ";
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + thing + `</p>`;
    alert("Congratulations! You have cast aside the capitalist notion that our worth is based on our productivity!\n \nRejoice and embrace the simple joy of being. \n\n🧘");
  } 
}
//function for clock - WORKING
// CODE FROM https://dev.to/ahmadullahnikzad/how-to-create-digital-clock-in-vanilla-js-2172
setInterval(showTime,1000);
function showTime()
{
  let date    = new Date();
  let time    = date.toLocaleTimeString();
  document.querySelector('.time').innerHTML=time;
}

//function for time quote generator
const quotesArr = 
["'Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back.' Harvey Mackay",
"'The trouble is, you think you have time.' Jack Kornfield",
"'Time is a cruel thief to rob us of our former selves. We lose as much to life as we do to death.' Elizabeth Forsythe Hailey",
"'Suspect each moment, for it is a thief, tiptoeing away with more than it brings.' John Updike",
"'Men talk of killing time, while time quietly kills them.' Dion Boucicault",
"'There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time.' Napoleon I",
"'The future is uncertain but the end is always near.' Jim Morrison",
"'Time takes it all, whether you want it to or not.' Stephen King, The Green Mile",
"'Time is a storm in which we are all lost.' William Carlos Williams",
"'Time flies over us, but leaves its shadow behind.' Nathaniel Hawthorne",
"'You can’t have a better tomorrow if you are thinking about yesterday all the time.' Charles F. Kettering",
"'Regret for wasted time is more wasted time.' Mason Cooley",
"'You can’t make up for lost time. You can only do better in the future.' Ashley Ormon",
"'How did it get so late so soon? It’s night before it’s afternoon. December is here before it’s June. My goodness how the time has flewn. How did it get so late so soon? Dr. Seuss",
"'If you love life, don’t waste time, for time is what life is made up of.' Bruce Lee",
"'Time is what we want most, but what we use worst.' William Penn",
"'The way we spend our time defines who we are.' Jonathan Estrin",
"'Time slips away like grains of sand never to return again.' Robin Sharma",
"'A man who dares to waste one hour of time has not discovered the value of life.' Charles Darwin",
"'The time I kill is killing me.' Mason Cooley",
"'Those who make the worst use of their time are the first to complain of its brevity.' Jean De La Bruyere",
"'Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.' Thomas Jefferson",
"'There’s never enough time to do all the nothing you want.' Bill Watterson",
"'It’s not that we have little time, but more that we waste a good deal of it.' Seneca",
"'The passing of time and all of its sickening crimes is making me sad again.' The Smiths, Rubber Ring",
"'Time is going to take so much away, but there's a way that you can offer time a trade. You gotta do something that you can get nicer at. You gotta do something that you can get wiser at. You better do something that you can get better at. 'Cause that's the only thing that time will leave you with.' Jeffrey Lewis, Time Trades",
"'Your time is limited, so don’t waste it living someone else’s life.' Steve Jobs",
"'Change your 24 hours and you will change your life.' Eric Thomas",
"'They always say time changes things, but you actually have to change them yourself.' Andy Warhol",
"'All we have to decide is what to do with the time that is given us.' J. R. R. Tolkien",
"'The time for action is now. It’s never too late to do something.' Antoine de Saint-Exupery"
];




window.onload = function chooseQuote()
{ 
  console.log(quotesArr.length);

  let now = new Date();
  let quoteNumber = now.getDate();

  document.getElementById("quotes").innerHTML = quotesArr[quoteNumber];
  console.log(quoteNumber);
}



