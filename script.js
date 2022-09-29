// var differentCards = document.querySelector['starting-card-contents', 'questionOne','questionTwo','questionThree','questionFour','questionFive', 'endScreenCard']

var hideCards = document.getElementsByClassName('startCardBruh')

//const hideCards = document.getElementsByClassName(,'questionOne','questionTwo','questionThree','questionFour', 'questionFive', 'endScreenCard');

// var c1 = document.querySelector('startCardBruh');

// var c2 = document.querySelector('bruhman');

// var c3 = document.querySelector('bruhman2');

// var c4 = document.querySelector('bruhman3');

// var c5 = document.querySelector('bruhman4');

// var c6 = document.querySelector('bruhman5');

// var c7 = document.querySelector('bruhman6');

var startButton = document.querySelector("#begin-Quiz");

var correctAnswerOne = document.querySelector("#correctAnswer1")

var correctAnswerTwo = document.querySelector("#correctAnswer2");

var correctAnswerThree = document.querySelector("#correctAnswer3");

var correctAnswerFour = document.querySelector("#correctAnswer4");

var correctAnswerFive = document.querySelector("#correctAnswer5");

var incorrectAnswer = document.querySelector("#incorrectAnswer");

var timerEl = document.querySelector(".timer")

var secondsLeft = 60;

var score = 0;


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
}




function cA2(){
   document.getElementById('bruhman2').style.visibility='hidden';
   document.getElementById('bruhman3').style.visibility='visible';
}


function cA3(){
   document.getElementById('bruhman3').style.visibility='hidden';
   document.getElementById('bruhman4').style.visibility='visible';
}


function cA4(){
   document.getElementById('bruhman4').style.visibility='hidden';
   document.getElementById('bruhman5').style.visibility='visible';
}



function cA5(){
   document.getElementById('bruhman5').style.visibility='hidden';
   document.getElementById('bruhman6').style.visibility='visible';
}

function incorrectBruh(){
// negative seconds left
secondsLeft + -5;
}





// so far I can console log a button which is already a big step forward
// function iterate(){

// }


   
// for(var i; i < length.hideCards; i++){
//    // var choice = document.getElementById
//    // if ()


//  

// function nxtQa () {
//    document.getElementById('startCardBruh').style.visibility='hidden'
//    document.getElementById('bruhman').style.visibility='visible'

// }


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
// iterate();
// nxtQa ();
})

correctAnswerOne.addEventListener("click", function(){
cA1();

})
correctAnswerTwo.addEventListener("click", function(){
cA2();
   
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
