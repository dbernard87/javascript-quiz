let submitBtn = document.querySelector(".btn");
let choiceOne = document.querySelector("#choiceOne");
let choiceTwo = document.querySelector("#choiceTwo");
let choiceThree = document.querySelector("#choiceThree");
let choiceFour = document.querySelector("#choiceFour");

submitBtn.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceOne.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceTwo.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceThree.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");
choiceFour.setAttribute("style", "padding: 10px 20px; color:blue; background-color:coral; color:whitesmoke; border-radius:5px");

let quizQuestions = [
    {
        question: "Which pair of characters are used to create an array in Javascript?",
        choice: ["<>", "()", "[]", "''"],
        answer: "[]",
    },
    {
        question: "What element attribute is used to change font and background color in Javascript?",
        choice: ["style", "set", "assign", "change"],
        answer: "style",
    },
    {
        question: "Which set of characters are used to assign AND to an if else statement?",
        choice: ["!!", "||", "++", "&&"],
        answer: "&&",
    },
    {
        question: "Which is the correct way to display the variable myVariable in console?",
        choice: ["console.log(myVariable)", "console.show(myVariable)", "console.display(myVariable)", "console.write(myVariable)"],
        answer: "console.log(myVariable)",
    }
];

function startTrivia() {

}

function startQuestions() {

}