
var startButton = document.querySelector("#begin-Quiz");

var correctAnswerOne = document.querySelector("#correctAnswer1")

var correctAnswerTwo = document.querySelector("#correctAnswer2");

var correctAnswerThree = document.querySelector("#correctAnswer3");

var correctAnswerFour = document.querySelector("#correctAnswer4");

var correctAnswerFive = document.querySelector("#correctAnswer5");

var incorrectAnswer = document.getElementById("incorrectAnswer");

var timerEl = document.querySelector(".timer")

var secondsLeft = 60;

var score = 0;

var scoreEl = document.querySelector('.score')


// startButton.setAttribute

// correctAnswerOne.setAttribute
//hidding cards function


// THIS CAN HIDE THE CARDS
// document.getElementById('startCardBruh').style.visibility='hidden';

document.getElementById('bruhman').style.visibility='hidden';

document.getElementById('bruhman2').style.visibility='hidden';

document.getElementById('bruhman3').style.visibility='hidden';

document.getElementById('bruhman4').style.visibility='hidden';

document.getElementById('bruhman5').style.visibility='hidden';

document.getElementById('bruhman6').style.visibility='hidden';


function getToQ1(){
   document.getElementById('startCardBruh').style.visibility='hidden';
   document.getElementById('bruhman').style.visibility='visible';
   

}



function cA1(){
   document.getElementById('bruhman').style.visibility='hidden';
   document.getElementById('bruhman2').style.visibility='visible';
   score = score + 5;
}




function cA2(){
   document.getElementById('bruhman2').style.visibility='hidden';
   document.getElementById('bruhman3').style.visibility='visible';
   score = score + 5;
}


function cA3(){
   document.getElementById('bruhman3').style.visibility='hidden';
   document.getElementById('bruhman4').style.visibility='visible';
   score = score + 5;
}


function cA4(){
   document.getElementById('bruhman4').style.visibility='hidden';
   document.getElementById('bruhman5').style.visibility='visible';
   score = score + 5;
}



function cA5(){
   document.getElementById('bruhman5').style.visibility='hidden';
   document.getElementById('bruhman6').style.visibility='visible';
   score = score + 5;
}

function incorrectBruh(){
// negative seconds left
if(incorrectAnswer.clicked == true){
timerEl = timerEl - 5;
}
timerEl.textContent = secondsLeft - 5;
}





function scoreDisplay(){
scoreEl.textContent = 'Heres your score: ' + score;
}






function setTimer(){
   document.getElementById('startCardBruh').style.visibility='hidden';
   document.getElementById('bruhman').style.visibility='visible';
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
timerEl.textContent = "You Ran Out of Time!";
document.getElementById('bruhman').style.visibility='hidden';

document.getElementById('bruhman2').style.visibility='hidden';

document.getElementById('bruhman3').style.visibility='hidden';

document.getElementById('bruhman4').style.visibility='hidden';

document.getElementById('bruhman5').style.visibility='hidden';

document.getElementById('bruhman6').style.visibility='hidden';

document.getElementById("bruhman6").style.visibility='visible';
}









// putting buttons down here
startButton.addEventListener("click", function() {
setTimer();
getToQ1();
scoreDisplay();
// iterate();
// nxtQa ();
})

correctAnswerOne.addEventListener("click", function(){
cA1();
score = score + 5;
})
correctAnswerTwo.addEventListener("click", function(){
cA2();
score+=5
   
    })
correctAnswerThree.addEventListener("click", function(){
    cA3();
      
  })
correctAnswerFour.addEventListener("click", function(){
         cA4();
         
})
correctAnswerFive.addEventListener("click", function(){
            cA5();
            
 })
            
         
incorrectAnswer.addEventListener("click", function(){
   incorrectBruh();
})
