//--Global variables-------------------------------------------------------------------------------------------
let listOfThings = [];

let pendingTasks = null;

let enabledTaskCount = 0;

const nullstr = "";

let inputBox  = null;

let todoList  = null;
    

//--Function for updating the task counter in the to do list---------------------------------------------------
function updateTaskCounter (word)
{
if (enabledTaskCount == 0) {enabledTaskCount = nullstr;}

pendingTasks.innerHTML        = `<p>` + enabledTaskCount + `</p>`;
let thingSpan                 = document.getElementById('thingSpan');
thingSpan.innerHTML           = `<p>` + word + `</p>`;
}

//--Function for adding the text in the input box to the to do list as a new item------------------------------
function addNew () 
   { 
    if (inputBox.value !== nullstr)                                       //condition: as long as input box is not empty
    {
      let newListItem         = document.createElement("div");            //creates the div for the new task
      let newTask             = document.createElement("li");             //creates the li for the new task
    
      todoList.appendChild(newListItem);                                  //puts the div into the todolist
      newListItem.appendChild(newTask);                                   //puts the li into the new task div
      newTask.innerText       = inputBox.value;                           //gives the li a value of whatever user typed in input
      newTask.classList.add("tasks");

      let deleteBtn           = document.createElement("button");         //creates button (to become deleteBtn)
      deleteBtn.innerHTML     = `<i class= "fas fa-trash-alt"></i>`;      //adds the icon making html to the button
   
      newTask.insertAdjacentElement('beforeend', deleteBtn);              //places the deleteBtn inside the li
      deleteBtn.classList.add(".deleteBtn");                              //adds 'deleteBtn' class for styling
      deleteBtn.addEventListener("click", deleteTask);                    //adds event listener to make button functional

      let checkBox = document.createElement("button");                    //creates button (to become checkBox button)
      checkBox.classList.add("checkBox");
      checkBox.innerHTML = `<input type="checkbox" id="tickBox" name="tickBox"><label for="tickBox"></label>`;
    
      newTask.insertAdjacentElement('beforeend', checkBox);               //places the checkBox inside the li
      checkBox.classList.add("checkBox");                                 //adds checkBox class for styling
      checkBox.addEventListener("click", checkBoxTicked);                 //adds event listener to make button functional
    
      listOfThings.push(newListItem.innerHTML);                           //adds the new task to the listOfThings array
      inputBox.value          = nullstr;                                  //clears the input box
    
      pendingTasks            = document.getElementById('pendingTasks');
      enabledTaskCount++;
      
      if       (enabledTaskCount >   1) { updateTaskCounter("things"); }
      else if  (enabledTaskCount === 1) { updateTaskCounter("thing");  } 

    }
    else if (inputBox.value == nullstr) 
    { 
    alert("You don't appear to have typed in a task, you cannot add an empty item to your list."); 
    }
  } 



//--Function to delete task when bin icon is pressed-----------------------------------------------------------
function deleteTask (evt)
{
  this.parentNode.parentNode.remove();
  listOfThings.pop();
    
  if       (listOfThings.length >   1) { updateTaskCounter("things");   }
  else if  (listOfThings.length === 1) { updateTaskCounter("thing");    }
  else if  (listOfThings        <   1) { updateTaskCounter("nothing");  }

  if (!evt.currentTarget.adjacentSibling.checked) 
    {
    enabledTaskCount--;
    }

}


function checkBoxTicked ()
{
  this.parentNode.classList.add("completed");
  this.onclick = checkBoxUnticked;
  enabledTaskCount--;
   
  if       (enabledTaskCount >   1) { updateTaskCounter("things");   }
  else if  (enabledTaskCount === 1) { updateTaskCounter("thing");    }
  else if  (enabledTaskCount <   1) { updateTaskCounter("nothing");  }

 }

//---------------------------------------------

function checkBoxUnticked ()
{
  this.parentNode.classList.remove("completed");
  enabledTaskCount++;
  this.onclick = checkBoxTicked;

  if       (enabledTaskCount >   1) { updateTaskCounter("things");   }
  else if  (enabledTaskCount === 1) { updateTaskCounter("thing");    }
  else if  (enabledTaskCount <   1) { updateTaskCounter("nothing");  }

}



//--Function for 'delete all' button---------------------------------------------------------------------------
function giveUp ()
{
  if (listOfThings.length > 0)
  {
    //--Code from Stack Overflow at https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    listOfThings.splice(0, listOfThings.length);
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


//--darkMode function to change page styling to dark version and toggle moon and sun icons---------------------
function darkMode () 
{ 
  document.body.classList.toggle  ("dark-mode");                          //toggles 'dark-mode' class on and off to toggle styling between default and dark mode
 
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


//--Function for clock-----------------------------------------------------------------------------------------
//--CODE FROM https://dev.to/ahmadullahnikzad/how-to-create-digital-clock-in-vanilla-js-2172
setInterval (function ()
{
  let date    = new Date();
  let time    = date.toLocaleTimeString();
  document.querySelector('.time').innerHTML=time;
}, 1000);

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
  
  timerBox        = document.getElementById("pom_timer");

  minute_count    = document.getElementById("minutes");
  second_count    = document.getElementById("seconds");

  startButton     = document.getElementById("startButton");
  
  document.getElementById("quotes").innerHTML = quotesArr[quoteNumber];   //give the quotes section the inner HTML of whichever quote is at the index in the array which corresponds to the day of the month

  inputBox        = document.getElementById('inputBox');

  todoList        = document.getElementById('todoList');      
    

};

//--POMODORO TIMER FUNCTIONS-----------------------------------------------------------------------------------


let minute_count = null;
let second_count = null;

const initial_minutes = 24;
const initial_seconds = 60;

let seconds_remaining   = initial_seconds;
let minutes_remaining   = initial_minutes;

let played       = false;

let startBell    = new Audio("timer_start.wav");
let endBell      = new Audio("timer_end.wav");  

let timerBox     = null;
let timer        = null;

let startButton  = null; 

//--Function to start the pomodoro timer-----------------------------------------------------------------------


function startTimer ()
{ 
  timer                 = setInterval (secondsCountdown, 1000);           //sets the interval for how often the secondsCountdown will be called
  startButton.disabled  = true;                                           //disable start button
  startBell.play();                                                       //play timer start sound
}


function secondsCountdown ()
{ 
  if      (seconds_remaining > 0)                                         //if seconds greater than 0 - decrement seconds by 1
  {
  second_count.innerText     = --seconds_remaining;
  minute_count.innerText     =   minutes_remaining;
  }

  else if (seconds_remaining == 0 && minutes_remaining > 0)               //if seconds IS 0 but minutes is greater than 0
  {
  second_count.innerText     = seconds_remaining = (initial_seconds - 1); //change seconds to 59
  minute_count.innerText     = --minutes_remaining;                       //decrement minutes by 1
  }

  else if (seconds_remaining == 0 && minutes_remaining == 0)              //if BOTH seconds and minutes are 0 - i.e. countdown has finished
    {                                                                               

    alert("Time to take a break!");
    resetTimer(); 

    if (played == false)
      {
      endBell.play();
      played = true;
      }  

    }

}
//-------------------------------------------------------------------------------------------------------

function pauseTimer () 
{ 
  clearInterval(timer); 
  startButton.disabled = false;
}

function resetTimer ()
{ 
startButton.disabled       = false;

seconds_remaining          = initial_seconds; 
minutes_remaining          = initial_minutes;

second_count.innerText     = "00";                  
minute_count.innerText     = initial_minutes +1;

clearInterval (timer);

}

//-------------------------------------------------------------------------------------------------------------