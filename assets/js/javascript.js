let startBtn = document.querySelector(".startBtn");
let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");
let choiceThree = document.querySelector("#choiceThree");
let choiceFour = document.querySelector("#choiceFour");
let questionText = document.querySelector("#questionText");
let resultText = document.querySelector("#resultText");
let secondText = document.querySelector("#secondText");
let timer = 30;
let score = 0;
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

secondText.style.display = "none";
choiceOne.style.display = "none";
choiceTwo.style.display = "none";
choiceThree.style.display = "none";
choiceFour.style.display = "none";

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    choiceOne.style.display = "block";
    choiceTwo.style.display = "block";
    choiceThree.style.display = "block";
    choiceFour.style.display = "block";
    let triviaTimer = setInterval(function(){
        if(timer <= 0){
          clearInterval(triviaTimer);
          document.getElementById("#timeLeft").innerHTML = "Finished";
          return triviaScore();
        } else {
          document.getElementById("#timeLeft").innerHTML = timer + " seconds remaining";
        }
        timer -= 1;
      }, 1000);
    return questionOne();
});

    function questionOne() {
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
        questionText.textContent = triviaChoice[1].question;
        choiceOne.textContent = triviaChoice[1].choice[0];
        choiceTwo.textContent = triviaChoice[1].choice[1];
        choiceThree.textContent = triviaChoice[1].choice[2];
        choiceFour.textContent = triviaChoice[1].choice[3]; 
        choiceOne.addEventListener("click", function() {
            resultText.textContent = "Correct Answer";
            return questionThree();
        })
        choiceTwo.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return questionThree();
        })
        choiceThree.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return questionThree();
        })
        choiceFour.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return questionThree();
        })
    };

    function questionThree() {
        questionText.textContent = triviaChoice[2].question;
        choiceOne.textContent = triviaChoice[2].choice[0];
        choiceTwo.textContent = triviaChoice[2].choice[1];
        choiceThree.textContent = triviaChoice[2].choice[2];
        choiceFour.textContent = triviaChoice[2].choice[3]; 
        choiceOne.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return questionFour();
        })
        choiceTwo.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return questionFour();
        })
        choiceThree.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return questionFour();
        })
        choiceFour.addEventListener("click", function() {
            resultText.textContent = "Correct Answer";
            return questionFour();
        })
    };

    function questionFour() {
        questionText.textContent = triviaChoice[3].question;
        choiceOne.textContent = triviaChoice[3].choice[0];
        choiceTwo.textContent = triviaChoice[3].choice[1];
        choiceThree.textContent = triviaChoice[3].choice[2];
        choiceFour.textContent = triviaChoice[3].choice[3]; 
        choiceOne.addEventListener("click", function() {
            resultText.textContent = "Correct Answer";
            return triviaScores();
        })
        choiceTwo.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return triviaScores();
        })
        choiceThree.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return triviaScores();
        })
        choiceFour.addEventListener("click", function() {
            resultText.textContent = "Incorrect Answer";
            timer -= 5;
            return triviaScores();
        })
    };

    function triviaScores() {
        secondText.style.display = "none";
        questionText.style.display = "none";
        choiceOne.style.display = "none";
        choiceTwo.style.display = "none";
        choiceThree.style.display = "none";
        choiceFour.style.display = "none";
        resultText.style.display = "none";
    };

/* NOW FIGURE OUT HOW TO STOP TIMER AND SAVE TIME LEFT AS THE USERS SCORE */