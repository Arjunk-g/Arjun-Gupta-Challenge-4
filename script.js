var differentCards = ['0','1','2','3','4','5']

var startButton = document.querySelector("#begin-Quiz");

var timerEl = document.querySelector(".timer")

var secondsLeft = 60;


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
   timerEl.textContent = " ";
   console.log("bruh");

}



// putting buttons down here


startButton.addEventListener("click", function() {
setTimer();
})

