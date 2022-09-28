// var differentCards = document.querySelector['.q1Class','.mcQuestionTemplate','.mcQuestionTemplate2','.mcQuestionTemplate3','.mcQuestionTemplate4']

var hideCards = document.querySelector('.q1Class','.mcQuestionTemplate','.mcQuestionTemplate2','.mcQuestionTemplate3','.mcQuestionTemplate4');

var startButton = document.querySelector("#begin-Quiz");

var timerEl = document.querySelector(".timer")

var secondsLeft = 4;

var hide = document.getElementById('bruhman');
//hidding cards function


//THIS CAN HIDE THE CARDS
// document.getElementById('bruhman').style.visibility='hidden';

// document.getElementById('bruhman2').style.visibility='hidden';

// document.getElementById('bruhman3').style.visibility='hidden';

// document.getElementById('bruhman4').style.visibility='hidden';

// document.getElementById('bruhman5').style.visibility='hidden';

// document.getElementById('bruhman6').style.visibility='hidden';



// so far I can console log a button which is already a big step forward

startButton.setAttribute



function setTimer(){
   var timerInterval = setInterval(function() {
   secondsLeft--;
   timerEl.textContent = "Until Game Over:" + secondsLeft;
      if (secondsLeft === 0) 
      {
         clearInterval(timerInterval);
         sendEndMessage();
      }
}, 1000);

}

//going to use this function to display end of timer screen or I guess the end screen
function sendEndMessage(){
timerEl.textContent = "Bruh youre out of time";
var outtaTime = document.getElementsByClassName(".endScreenCard")
// outtaTime.appendChild("outtaTime");
}


// function hiddenCards(){
// document.getElementsByClassName(hideCards).style.visibility="hidden";

// }




// putting buttons down here
startButton.addEventListener("click", function() {
setTimer();
})

