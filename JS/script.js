//--Global variables-------------------------------------------------------------------------------------------
let listOfThings = [];

let pendingTasks = null;


//--Function for updating the task counter in the to do list---------------------------------------------------
function updateTaskCounter (word)
{
pendingTasks.innerHTML        = `<p>` + listOfThings.length + `</p>`;
let thingSpan                 = document.getElementById('thingSpan');
thingSpan.innerHTML           = `<p>` + word + `</p>`;
}


//--Function for adding the text in the input box to the to do list as a new item------------------------------
function addNew () 
   { 
    let inputBox              = document.getElementById('inputBox');      //identify input box
    if (inputBox.value !== " ")                                           //condition: as long as input box is not empty
    {
      let todoList            = document.getElementById('todoList')       //identify to do list
      let newListItem         = document.createElement("div");            //creates the div for the new task
      let newTask             = document.createElement("li");             //creates the li for the new task
    
      todoList.appendChild(newListItem);                                  //puts the div into the todolist
      newListItem.appendChild(newTask);                                   //puts the li into the new task div
      newTask.innerHTML       = inputBox.value;                           //gives the li a value of whatever user typed in input
      newTask.classList.add("tasks");

      let deleteBtn           = document.createElement("button");         //creates button (to become deleteBtn)
      deleteBtn.innerHTML     = `<i class= "fas fa-trash-alt"></i>`;      //adds the icon making html to the button
   
      newTask.insertAdjacentElement('beforeend', deleteBtn);              //places the deleteBtn inside the li
      deleteBtn.classList.add(".deleteBtn");                              //adds 'deleteBtn' class for styling
      deleteBtn.addEventListener("click", deleteTask);                    //adds event listener to make button functional

      let checkBox = document.createElement("button");                    //creates button (to become checkBox button)
      checkBox.innerHTML      = `<i class = "fas fa-check"></i>`;         //adds the icon html to the button
    
      newTask.insertAdjacentElement('beforeend', checkBox);               //places the checkBox inside the li
      checkBox.classList.add("checkBox");                                 //adds checkBox class for styling
      checkBox.addEventListener("click", completeTask);                   //adds event listener to make button functional
    
      listOfThings.push(newListItem.innerHTML);                           //adds the new task to the listOfThings array
      inputBox.value          = " ";                                      //clears the input box
    
      pendingTasks            = document.getElementById('pendingTasks');

      if       (listOfThings.length >   1) { updateTaskCounter("things"); }
      else if  (listOfThings.length === 1) { updateTaskCounter("thing");  }
      else     														 { alert("You don't appear to have typed in a task, you cannot add an empty item to your list."); }
    }
}


//--darkMode function to change page styling to dark version and toggle moon and sun icons---------------------
function darkMode () 
{
  let body              = document.body;                                  //identifies document body
  let quotes            = document.getElementById("quotes");              //identifies quotes section
  
  body.classList.toggle   ("dark-mode");                                  //toggles 'dark-mode' class on and off to toggle styling between default and dark mode
  quotes.classList.remove ("quotes_class");                               //removes default styling for quote section
  quotes.classList.add    ("dark_quotes");                                //adds 'dark' styling for quote section
  
  if   (document.getElementById("satellite").classList.contains("moon")) //swaps between moon and sun images

       document.getElementById("satellite").className = "sun superbutton";
  
  else document.getElementById("satellite").className = "moon superbutton";
}


//--Function to contract and expand the to do list------------------------------------------------------------- 
$(document).ready(function()
{
  $("#downarrow").click(function()
  {
    $("#main-todo").slideToggle();
  });
});


//--Function to hide/reveal rainsounds player------------------------------------------------------------------
$(document).ready(function()
{
  $("#raincloud").click(function()
  {
    $("#rainsounds").slideToggle();
  });
});


//--Function to hide/reveal gratitude list---------------------------------------------------------------------
$(document).ready(function()
{
  $("#heart").click(function()
  {
    $("#gratitude").slideToggle();
  });
});


//--Function to hide/reveal the pomodoro timer-----------------------------------------------------------------
$(document).ready(function()
{
  $("#tomato").click(function()
  {
    $("#pom_timer").slideToggle();
  });
});


//--Function to delete task when bin icon is pressed-----------------------------------------------------------
function deleteTask ()
{
  this.parentNode.parentNode.remove();
  listOfThings.pop();
  console.log(listOfThings);
  
  if       (listOfThings.length >   1) { updateTaskCounter("things");   }
  else if  (listOfThings.length === 1) { updateTaskCounter("thing");    }
  else if  (listOfThings        <   1) { updateTaskCounter("nothing");  }
}

//--Function to add strikethrough styling if checkbox is ticked------------------------------------------------
function completeTask ()
{
  this.parentNode.classList.toggle("completed");

  /*if($('.li.completed').length === $('.ul .div').length)*/ //DIDN'T WORK - CHECKING OFF ONE ITEM TRIGGERED THE ALERT FOR ALL ITEMS COMPLETED
  if($('.li.completed').length === $(listOfThings).length)   //DOESN'T WORK - CHECKING OFF ALL ITEMS FAILS TO TRIGGER THE ALERT OR COUNTDOWN TO 0 TASKS
  {
    pendingTasks.innerHTML  = " ";
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + "nothing" + `</p>`;
    alert("Congratulations! You have completed all your tasks. Take a well earned break!");
  }
}


//--Function for 'delete all' button---------------------------------------------------------------------------
function giveUp ()
{
  if (listOfThings.length > 0)
  {
    //--Code from Stack Overflow
    listOfThings.splice(0, listOfThings.length);
    console.log(listOfThings);
    Array.prototype.slice.call(document.getElementsByTagName('li')).forEach(
      function(item) {
        item.remove();
        });
    //--end code from Stack Overflow

    pendingTasks.innerHTML  = " ";
    let thingSpan           = document.getElementById('thingSpan');
    thingSpan.innerHTML     = `<p>` + "nothing" + `</p>`;
    alert("Congratulations! You have cast aside the capitalist notion that our worth is based on our productivity!\n \nRejoice and embrace the simple joy of being. \n\n🧘");
  } 
}
//--Function for clock-----------------------------------------------------------------------------------------
//--CODE FROM https://dev.to/ahmadullahnikzad/how-to-create-digital-clock-in-vanilla-js-2172
setInterval (showTime,1000);
function showTime ()
{
  let date    = new Date();
  let time    = date.toLocaleTimeString();
  document.querySelector('.time').innerHTML=time;
}

//--Function for the date based quote generator--------------------------------------------------------------------
const quotesArr = 
["'Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back.'  Harvey Mackay",
"'The trouble is, you think you have time.'  Jack Kornfield",
"'Time is a cruel thief to rob us of our former selves. We lose as much to life as we do to death.'  Elizabeth Forsythe Hailey",
"'Suspect each moment, for it is a thief, tiptoeing away with more than it brings.'  John Updike",
"'Men talk of killing time, while time quietly kills them.'  Dion Boucicault",
"'There is one kind of robber whom the law does not strike at, and who steals what is most precious to men: time.'  Napoleon I",
"'The future is uncertain but the end is always near.'  Jim Morrison",
"'Time takes it all, whether you want it to or not.'  Stephen King",
"'All we have to decide is what to do with the time that is given us.'  J. R. R. Tolkien",
"'Time is a storm in which we are all lost.'  William Carlos Williams",
"'Time flies over us, but leaves its shadow behind.'  Nathaniel Hawthorne",
"'You can’t have a better tomorrow if you are thinking about yesterday all the time.'  Charles F. Kettering",
"'Regret for wasted time is more wasted time.'  Mason Cooley",
"'You can’t make up for lost time. You can only do better in the future.'  Ashley Ormon",
"'How did it get so late so soon? It’s night before it’s afternoon. December is here before it’s June. My goodness how the time has flewn. How did it get so late so soon?  Dr. Seuss",
"'If you love life, don’t waste time, for time is what life is made up of.'  Bruce Lee",
"'Time is what we want most, but what we use worst.'  William Penn",
"'The way we spend our time defines who we are.'  Jonathan Estrin",
"'Time slips away like grains of sand never to return again.'  Robin Sharma",
"'A man who dares to waste one hour of time has not discovered the value of life.'  Charles Darwin",
"'The time I kill is killing me.'  Mason Cooley",
"'Those who make the worst use of their time are the first to complain of its brevity.'  Jean De La Bruyere",
"'Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.'  Thomas Jefferson",
"'There’s never enough time to do all the nothing you want.'  Bill Watterson",
"'It’s not that we have little time, but more that we waste a good deal of it.'  Seneca",
"'The passing of time and all of its sickening crimes is making me sad again.' The Smiths, Rubber Ring",
"'Time is going to take so much away, but there's a way that you can offer time a trade. You gotta do something that you can get nicer at. You gotta do something that you can get wiser at. You better do something that you can get better at. 'Cause that's the only thing that time will leave you with.'  Jeffrey Lewis, Time Trades",
"'Your time is limited, so don’t waste it living someone else’s life.'  Steve Jobs",
"'Change your 24 hours and you will change your life.'  Eric Thomas",
"'They always say time changes things, but you actually have to change them yourself.'  Andy Warhol",
"'The time for action is now. It’s never too late to do something.'  Antoine de Saint-Exupery"
];

window.onload     = function chooseQuote ()
{ 
  let now         = new Date();                                           //get current date
  let quoteNumber = now.getDate();                                        //assign the day of the month to a variable

  document.getElementById("quotes").innerHTML = quotesArr[quoteNumber];   //give the quotes sectin the inner HTML of whichever quote is at the index in the array which corresponds to the day of the month
};

//--POMODORO TIMER FUNCTIONS-----------------------------------------------------------------------------------


let minute_count = document.getElementById("minutes");
let second_count = document.getElementById("seconds");
let chime = new Audio("timer_start.wav");
let played = false;

//--Function to start the pomodoro timer-----------------------------------------------------------------------

function startTimer ()
{ 
  let timer             = setInterval (secondsCountdown, 1000);           //sets the interval for how often the secondsCountdown will be called
  let startButton       = document.getElementById("startButton");               

  startButton.disabled  = true;                                           //disable start button
  chime.play();                                                           //play timer start sound
  secondsCountdown  ();                                                   //start countdown
}

function secondsCountdown ()
{ 
  let minute_count = document.getElementById("minutes");
  let second_count = document.getElementById("seconds");
    
  if      (second_count.innerHTML != 0)
  {
  second_count.innerHTML     = second_count.innerHTML -1;
  }

  else if (second_count.innerHTML == 0 && minute_count.innerHTML != 0)
  {
  second_count.innerHTML = 59;
  minute_count.innerHTML = minute_count.innerHTML -1;
  }

  else if (second_count.innerHTML == 0 && minute_count.innerHTML == 0)
    {
    let achievement_bell  = new Audio("achievement_bell.wav");
    let timerBox          = document.getElementById("pom_timer");

    timerBox.classList.remove("pom_class")
    timerBox.classList.add("break");

      if (played == false)
      {
      achievement_bell.play();
      played = true;
      }    
    }
}
//--Function to pause the pomodoro timer-- NOT WORKING AT ALL
function pauseTimer ()
  {
  let timer = setInterval(secondsCountdown, 1000);
  clearInterval(timer);
  }

//--Function to reset the pomodoro timer to 25:00-- WORKS BUT THE TIMER IMMEDIATELY STARTS COUNTING DOWN. SHOULD REMAIN STATIC.
function resetTimer ()
{ 
let startButton         = document.getElementById("startButton");
let timer               = setInterval(secondsCountdown, 1000);
let minute_count        = document.getElementById("minutes");
let second_count        = document.getElementById("seconds");

startButton.disabled    = false;
minute_count.innerHTML  = 25;
second_count.innerHTML  = "00";
clearInterval (timer);
}

//-------------------------------------------------------------------------------------------------------------