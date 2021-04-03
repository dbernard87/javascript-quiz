/*------------- Start Javascript Quiz Event Listener --------------*/
startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    /*------------- Question Timer Function --------------*/
    let quizTimer = setInterval(function(){
        if(timer <= 0){
          clearInterval(quizTimer);
            document.getElementById("timeLeft").textContent = "Times Up! Game Over.";
            choiceOne.style.display = "none";
            choiceTwo.style.display = "none";
            choiceThree.style.display = "none";
            choiceFour.style.display = "none";
            choiceFive.style.display = "none";
            choiceSix.style.display = "none";
            choiceSeven.style.display = "none";
            choiceEight.style.display = "none";
            choiceNine.style.display = "none";
            choiceTen.style.display = "none";
            choiceEleven.style.display = "none";
            choiceTwelve.style.display = "none";
            choiceThirteen.style.display = "none";
            choiceFourteen.style.display = "none";
            choiceFifteen.style.display = "none";
            choiceSixteen.style.display = "none";
            resultText.style.display = "none";
            playAgain.style.display = "block";
        } else {
          document.getElementById("timeLeft").textContent = timer + " seconds remaining";
        }
        timer -= 1;
    }, 1000);
    return questionOne();
});

/*------------- View Highscores Event Listener --------------*/
viewHigh.addEventListener("click", function () {
    startBtn.style.display = "none";
    viewHigh.style.display = "none";
    clockIcon.style.display = "none";
    welcomeSplash.style.display = "none";
    scoreListSaved.style.display = "block";
    playersText.style.display = "block";
    clearHigh.style.display = "block";
    highScoreSplash.style.display = "block";
    clearHigh.addEventListener("click", function () {
        document.querySelector("#scoreList").textContent = "";
        localStorage.clear();
    })
    playAgain.style.display = "block";
})

/*------------- Question #1 Function --------------*/
function questionOne() {
    viewHigh.style.display = "none";
    clockIcon.style.display = "none";
    welcomeSplash.style.display = "none";
    timeLeft.style.display = "block";
    choiceOne.style.display = "block";
    choiceTwo.style.display = "block";
    choiceThree.style.display = "block";
    choiceFour.style.display = "block";
    questionText.textContent = quizChoice[0].question;
    choiceOne.textContent = quizChoice[0].choice[0];
    choiceTwo.textContent = quizChoice[0].choice[1];
    choiceThree.textContent = quizChoice[0].choice[2];
    choiceFour.textContent = quizChoice[0].choice[3];
    choiceOne.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionTwo();
    })
    choiceTwo.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionTwo();
    })
    choiceThree.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return questionTwo();
    })
    choiceFour.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionTwo();
    })
};

/*------------- Question #2 Function --------------*/
function questionTwo() {
    choiceOne.style.display = "none";
    choiceTwo.style.display = "none";
    choiceThree.style.display = "none";
    choiceFour.style.display = "none";
    choiceFive.style.display = "block";
    choiceSix.style.display = "block";
    choiceSeven.style.display = "block";
    choiceEight.style.display = "block"; 
    questionText.textContent = quizChoice[1].question;
    choiceFive.textContent = quizChoice[1].choice[0];
    choiceSix.textContent = quizChoice[1].choice[1];
    choiceSeven.textContent = quizChoice[1].choice[2];
    choiceEight.textContent = quizChoice[1].choice[3]; 
    choiceFive.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return questionThree();
    })
    choiceSix.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionThree();
    })
    choiceSeven.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionThree();
    })
    choiceEight.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionThree();
    })
};

/*------------- Question #3 Function --------------*/
function questionThree() {
    choiceFive.style.display = "none";
    choiceSix.style.display = "none";
    choiceSeven.style.display = "none";
    choiceEight.style.display = "none";
    choiceNine.style.display = "block";
    choiceTen.style.display = "block";
    choiceEleven.style.display = "block";
    choiceTwelve.style.display = "block";
    questionText.textContent = quizChoice[2].question;
    choiceNine.textContent = quizChoice[2].choice[0];
    choiceTen.textContent = quizChoice[2].choice[1];
    choiceEleven.textContent = quizChoice[2].choice[2];
    choiceTwelve.textContent = quizChoice[2].choice[3]; 
    choiceNine.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionFour();
    })
    choiceTen.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionFour();
    })
    choiceEleven.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return questionFour();
    })
    choiceTwelve.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return questionFour();
    })
};

/*------------- Question #4 Function --------------*/
function questionFour() {
    choiceNine.style.display = "none";
    choiceTen.style.display = "none";
    choiceEleven.style.display = "none";
    choiceTwelve.style.display = "none";
    choiceThirteen.style.display = "block";
    choiceFourteen.style.display = "block";
    choiceFifteen.style.display = "block";
    choiceSixteen.style.display = "block";
    questionText.textContent = quizChoice[3].question;
    choiceThirteen.textContent = quizChoice[3].choice[0];
    choiceFourteen.textContent = quizChoice[3].choice[1];
    choiceFifteen.textContent = quizChoice[3].choice[2];
    choiceSixteen.textContent = quizChoice[3].choice[3]; 
    choiceThirteen.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return quizScores();
    })
    choiceFourteen.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return quizScores();
    })
    choiceFifteen.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return quizScores();
    })
    choiceSixteen.addEventListener("click", function() {
        resultText.textContent = "Incorrect answer, -5 seconds.";
        timer -= 5;
        return quizScores();
    })
};

/*------------- Quiz Highscore Function For Display Settings And Event Listener --------------*/
function quizScores() {
    secondText.style.display = "none";
    choiceOne.style.display = "none";
    choiceTwo.style.display = "none";
    choiceThree.style.display = "none";
    choiceFour.style.display = "none";
    resultText.style.display = "none";
    choiceThirteen.style.display = "none";
    choiceFourteen.style.display = "none";
    choiceFifteen.style.display = "none";
    choiceSixteen.style.display = "none";
    timeLeft.style.display = "none";
    yourScore.style.display = "block";
    scoreName.style.display = "block";
    submitScore.style.display = "block";
    scoreListSaved.style.display = "block";
    playersText.style.display = "block";
    questionText.textContent = ('Score: ' + timer);
    clearHigh.style.display = "block";
    clearHigh.addEventListener("click", function () {
        document.querySelector("#scoreList").textContent = "";
        localStorage.clear();
    })
    playAgain.style.display = "block";
};

playAgain.addEventListener("click", function () {
    window.location.reload();
});