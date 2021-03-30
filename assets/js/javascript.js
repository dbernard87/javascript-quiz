let startBtn = document.querySelector(".startBtn");
let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");
let choiceThree = document.querySelector("#choiceThree");
let choiceFour = document.querySelector("#choiceFour");
let questionText = document.querySelector("#questionText");
let resultText = document.querySelector("#resultText");
let secondText = document.querySelector("#secondText");
let timer = 20;
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
    return triviaQuestions();
});

function triviaQuestions() {
    questionText.textContent = triviaChoice[0].question;
    choiceOne.textContent = triviaChoice[0].choice[0];
    choiceTwo.textContent = triviaChoice[0].choice[1];
    choiceThree.textContent = triviaChoice[0].choice[2];
    choiceFour.textContent = triviaChoice[0].choice[3];
}