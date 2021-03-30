let startBtn = document.querySelector(".startBtn");
let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");
let choiceThree = document.querySelector("#choiceThree");
let choiceFour = document.querySelector("#choiceFour");
let questionText = document.querySelector("#questionText");
let resultText = document.querySelector("#resultText");
let secondText = document.querySelector("#secondText");
let timer = 20;

startBtn.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceOne.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceTwo.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceThree.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceFour.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");

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
    questionText.textContent = "Which pair of characters are used to create an array in Javascript?";
    choiceOne.textContent = "< >";
    choiceOne.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionTwo();
    })
    choiceTwo.textContent = "( )";
    choiceTwo.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionTwo();
    })
    choiceThree.textContent = "[ ]";
    choiceThree.addEventListener("click", function() {
        resultText.textContent = "Correct";
        return questionTwo();
    })
    choiceFour.textContent = '" "';
    choiceFour.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionTwo();
    })
};

function questionTwo() {
    questionText.textContent = "What element attribute is used to change font and background color in Javascript?";
    choiceOne.textContent = "style";
    choiceOne.addEventListener("click", function() {
        resultText.textContent = "Correct";
        return questionThree();
    })
    choiceTwo.textContent = "set";
    choiceTwo.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionThree();
    })
    choiceThree.textContent = "assign";
    choiceThree.addEventListener("click", function() {
        resultText.textContent = "Inorrect";
        return questionThree();
    })
    choiceFour.textContent = "change";
    choiceFour.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionThree();
    })
};

function questionThree() {
    questionText.textContent = "Which set of characters are used to assign AND to an if else statement?";
    choiceOne.textContent = "!!";
    choiceOne.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionFour();
    })
    choiceTwo.textContent = "||";
    choiceTwo.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionFour();
    })
    choiceThree.textContent = "++";
    choiceThree.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return questionFour();
    })
    choiceFour.textContent = "&&";
    choiceFour.addEventListener("click", function() {
        resultText.textContent = "Correct";
        return questionFour();
    })
};

function questionFour() {
    questionText.textContent = "Which is the correct way to display the variable myVariable in console?";
    choiceOne.textContent = "console.log(myVariable)";
    choiceOne.addEventListener("click", function() {
        resultText.textContent = "Correct";
        return triviaScore();
    })
    choiceTwo.textContent = "console.show(myVariable)";
    choiceTwo.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return triviaScore();
    })
    choiceThree.textContent = "console.display(myVariable)";
    choiceThree.addEventListener("click", function() {
        resultText.textContent = "Correct";
        return triviaScore();
    })
    choiceFour.textContent = "console.write(myVariable)";
    choiceFour.addEventListener("click", function() {
        resultText.textContent = "Incorrect";
        return triviaScore();
    })
};

function triviaScore() {
    secondText.style.display = "none";
    questionText.style.display = "none";
    choiceOne.style.display = "none";
    choiceTwo.style.display = "none";
    choiceThree.style.display = "none";
    choiceFour.style.display = "none";
    resultText.style.display = "none";
};