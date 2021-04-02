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
let welcomeSplash = document.querySelector("#welcomeSplash")
let clockIcon = document.querySelector("#clockIcon")
let timer = 30;
let triviaChoice = [
    {
        question: "Which pair of characters are used to create an array in Javascript?",
        choice: ["< >", "( )", "[ ]", "' '"]
    },
    {
        question: "Which attribute is used to change font color in Javascript?",
        choice: ["style", "set", "assign", "change"]
    },
    {
        question: "Which set of characters are used to assign AND to an if else statement?",
        choice: ["!!", "||", "++", "&&"]
    },
    {
        question: "Which is the correct way to display myVariable in console?",
        choice: ["console.log(myVariable)", "console.show(myVariable)", "console.display(myVariable)", "console.write(myVariable)"]
    }
]; 