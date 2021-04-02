startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    let triviaTimer = setInterval(function(){
        if(timer <= 0){
          clearInterval(triviaTimer);
            document.getElementById("timeLeft").textContent = "Times Up! Game Over.";
            choiceFive.style.display = "none";
            choiceSix.style.display = "none";
            choiceSeven.style.display = "none";
            choiceEight.style.display = "none";
            choiceNine.style.display = "none";
            choiceTen.style.display = "none";
            choiceEleven.style.display = "none";
            choiceTwelve.style.display = "none";
        } else {
          document.getElementById("timeLeft").textContent = timer + " seconds remaining";
        }
        timer -= 1;
    }, 1000);
    return questionOne();
});

function questionOne() {
    clockIcon.style.display = "none";
    welcomeSplash.style.display = "none";
    timeLeft.style.display = "block";
    choiceOne.style.display = "block";
    choiceTwo.style.display = "block";
    choiceThree.style.display = "block";
    choiceFour.style.display = "block";
    questionText.textContent = triviaChoice[0].question;
    choiceOne.textContent = triviaChoice[0].choice[0];
    choiceTwo.textContent = triviaChoice[0].choice[1];
    choiceThree.textContent = triviaChoice[0].choice[2];
    choiceFour.textContent = triviaChoice[0].choice[3];
    choiceOne.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionTwo();
    })
    choiceTwo.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionTwo();
    })
    choiceThree.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return questionTwo();
    })
    choiceFour.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionTwo();
    })
};

function questionTwo() {
    choiceOne.style.display = "none";
    choiceTwo.style.display = "none";
    choiceThree.style.display = "none";
    choiceFour.style.display = "none";
    choiceFive.style.display = "block";
    choiceSix.style.display = "block";
    choiceSeven.style.display = "block";
    choiceEight.style.display = "block"; 
    questionText.textContent = triviaChoice[1].question;
    choiceFive.textContent = triviaChoice[1].choice[0];
    choiceSix.textContent = triviaChoice[1].choice[1];
    choiceSeven.textContent = triviaChoice[1].choice[2];
    choiceEight.textContent = triviaChoice[1].choice[3]; 
    choiceFive.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return questionThree();
    })
    choiceSix.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionThree();
    })
    choiceSeven.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionThree();
    })
    choiceEight.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionThree();
    })
};

function questionThree() {
    choiceFive.style.display = "none";
    choiceSix.style.display = "none";
    choiceSeven.style.display = "none";
    choiceEight.style.display = "none";
    choiceNine.style.display = "block";
    choiceTen.style.display = "block";
    choiceEleven.style.display = "block";
    choiceTwelve.style.display = "block";
    questionText.textContent = triviaChoice[2].question;
    choiceNine.textContent = triviaChoice[2].choice[0];
    choiceTen.textContent = triviaChoice[2].choice[1];
    choiceEleven.textContent = triviaChoice[2].choice[2];
    choiceTwelve.textContent = triviaChoice[2].choice[3]; 
    choiceNine.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionFour();
    })
    choiceTen.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionFour();
    })
    choiceEleven.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return questionFour();
    })
    choiceTwelve.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return questionFour();
    })
};

function questionFour() {
    choiceNine.style.display = "none";
    choiceTen.style.display = "none";
    choiceEleven.style.display = "none";
    choiceTwelve.style.display = "none";
    choiceThirteen.style.display = "block";
    choiceFourteen.style.display = "block";
    choiceFifteen.style.display = "block";
    choiceSixteen.style.display = "block";
    questionText.textContent = triviaChoice[3].question;
    choiceThirteen.textContent = triviaChoice[3].choice[0];
    choiceFourteen.textContent = triviaChoice[3].choice[1];
    choiceFifteen.textContent = triviaChoice[3].choice[2];
    choiceSixteen.textContent = triviaChoice[3].choice[3]; 
    choiceThirteen.addEventListener("click", function() {
        resultText.textContent = "Correct Answer";
        return triviaScores();
    })
    choiceFourteen.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return triviaScores();
    })
    choiceFifteen.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return triviaScores();
    })
    choiceSixteen.addEventListener("click", function() {
        resultText.textContent = "Incorrect Answer";
        timer -= 5;
        return triviaScores();
    })
};

function triviaScores() {
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
    scoreListSaved.style.display = "block";
    playersText.style.display = "block";
    questionText.textContent = ('Score: ' + timer);
    clearHigh.style.display = "block";
    clearHigh.addEventListener("click", function () {
        document.querySelector("#scoreList").textContent = "";
        localStorage.clear();
    })
    };