let startBtn = document.querySelector(".startBtn");
let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");
let choiceThree = document.querySelector("#choiceThree");
let choiceFour = document.querySelector("#choiceFour");
let choiceFive = document.querySelector("#choiceFive");
let choiceSix = document.querySelector("#choiceSix");
let choiceSeven = document.querySelector("#choiceSeven");
let choiceEight = document.querySelector("#choiceEight");
let choiceNine = document.querySelector("#choiceNine");
let choiceTen = document.querySelector("#choiceTen");
let choiceEleven = document.querySelector("#choiceEleven");
let choiceTwelve = document.querySelector("#choiceTwelve");
let choiceThirteen = document.querySelector("#choiceThirteen");
let choiceFourteen = document.querySelector("#choiceFourteen");
let choiceFifteen = document.querySelector("#choiceFifteen");
let choiceSixteen = document.querySelector("#choiceSixteen");
let questionText = document.querySelector("#questionText");
let resultText = document.querySelector("#resultText");
let secondText = document.querySelector("#secondText");
let yourScore = document.querySelector("#yourScore");
let timeLeft = document.querySelector("#timeLeft");
let scoreName = document.querySelector("#scoreName")
let scoreListSaved = document.querySelector("#scoreList")
let playersText = document.querySelector("#playersText")
let timer = 30;
let triviaChoice = [
    {
        question: "Which pair of characters are used to create an array in Javascript?",
        choice: ["< >", "( )", "[ ]", "' '"],
        answer: "[]",
    },
    {
        question: "Which attribute is used to change font color in Javascript?",
        choice: ["style", "set", "assign", "change"],
        answer: "style",
    },
    {
        question: "Which set of characters are used to assign AND to an if else statement?",
        choice: ["!!", "||", "++", "&&"],
        answer: "&&",
    },
    {
        question: "Which is the correct way to display myVariable in console?",
        choice: ["console.log(myVariable)", "console.show(myVariable)", "console.display(myVariable)", "console.write(myVariable)"],
        answer: "console.log(myVariable)",
    }
]; 

startBtn.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceOne.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceTwo.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceThree.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceFour.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceFive.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceSix.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceSeven.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceEight.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceNine.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceTen.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceEleven.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceTwelve.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceThirteen.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceFourteen.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceFifteen.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceSixteen.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");

secondText.style.display = "none";
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
yourScore.style.display = "none";
timeLeft.style.display = "none";
scoreName.style.display = "none";
scoreListSaved.style.display = "none";
playersText.style.display = "none";

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    let triviaTimer = setInterval(function(){
        if(timer <= 0){
          clearInterval(triviaTimer);
          document.getElementById("timeLeft").textContent = "Times Up! You will receive negative points!";
        } else {
          document.getElementById("timeLeft").textContent = timer + " seconds remaining";
        }
        timer -= 1;
      }, 1000);
    return questionOne();
});

function questionOne() {
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
    questionText.textContent = ('Your Score: '+timer+'');
    };

var scoreInput = document.querySelector("#yourScore");
var scoreForm = document.querySelector("#scoreForm");
var scoreList = document.querySelector("#scoreList");
var scoreCountSpan = document.querySelector("#scoreCount");
var scores = [];

function renderScores() {
  scoreList.textContent = "";
  scoreCountSpan.textContent = scores.length;
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = questionText.textContent;
    li.appendChild(button);
    scoreList.appendChild(li);
  }
}

function init() {

  var storedscores = JSON.parse(localStorage.getItem("scores"));
  if (storedscores !== null) {
    scores = storedscores;
  }
  renderScores();
}

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var scoreText = scoreInput.value.trim();
  if (scoreText === "") {
    return;
  }

  scores.push(scoreText);
  scoreInput.value = "";
  storeScores();
  renderScores();
});

scoreList.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    scores.splice(index, 1);
    storeScores();
    renderScores();
  }
});

init()