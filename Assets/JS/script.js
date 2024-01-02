
//  Quiz Questions
var questions = [
  {
    prompt: "The Full form of CSS is:",
    choices: ["Cascading Style Sheets", "Colored Special Sheets", "Color and Style Sheets", "None of the above"],
    answer: "Cascading Style Sheets"
  },
];

var startBtn = document.querySelector("#start");
var timerCount = document.querySelector("#count");
var choicesEl = document.querySelector("#options");
var feedbackEl = document.querySelector("#feedback");

var startTime = 60;
var timerId;
var currentQuestionIndex = 0;



function quizStart() {
    document.getElementById("quiz_info").style.display = "none";
    timerId = setInterval(clock, 1000);
    timerCount.textContent = startTime;
    document.getElementById("questions").style.display = "block";
    showQuestions();
}

function showQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  var promptEl = document.getElementById("question_prompt");
  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function(choice, i) {
      var choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choiceBtn.onclick = questionClick;
      choicesEl.appendChild(choiceBtn);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    startTime -= 15;
    if (startTime < 0) {
      startTime = 0;
    }
    timerCount.textContent = startTime;
    feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 2000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    showQuestions();
  }
}

function clock() {
  startTime--;
  timerCount.textContent = startTime;
  if (startTime <= 0) {
    quizEnd();
  }
}

// Start Quiz
startBtn.onclick = quizStart;
