let scoreInput = document.querySelector("#yourScore");
let scoreForm = document.querySelector("#scoreForm");
let scoreList = document.querySelector("#scoreList");
let scoreCountSpan = document.querySelector("#scoreCount");
let scores = [];

function renderScores() {
  scoreList.textContent = "";
  scoreCountSpan.textContent = scores.length;
  for (let i = 0; i < scores.length; i++) {
    let score = scores[i];

    let li = document.createElement("li");
    li.textContent = score.toUpperCase();
    li.setAttribute("data-index", i);

    let button = document.createElement("button");
    button.textContent = questionText.textContent;
    li.appendChild(button);
    scoreList.appendChild(li);
  }
}

function init() {

  let storedscores = JSON.parse(localStorage.getItem("scores"));
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
  let scoreText = scoreInput.value.trim();
  if (scoreText === "") {
    return;
  }

  scores.push(scoreText);
  scoreInput.value = "";
  storeScores();
  renderScores();
});

scoreList.addEventListener("click", function(event) {
  let element = event.target;
  if (element.matches("button") === true) {
    let index = element.parentElement.getAttribute("data-index");
    scores.splice(index, 1);
    storeScores();
    renderScores();
  }
});

init()