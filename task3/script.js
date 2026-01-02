const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Management Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Syntax", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Styling System", correct: false }
    ]
  },
  {
    question: "Which tag is used to insert a line break in HTML?",
    answers: [
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<br>", correct: true },
      { text: "<newline>", correct: false }
    ]
  },
  {
    question: "Which property is used to change the text color in CSS?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "text-style", correct: false }
    ]
  },
  {
    question: "Inside which HTML element do we put JavaScript code?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<code>", correct: false }
    ]
  },
  {
    question: "How can you make a numbered list in HTML?",
    answers: [
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: true },
      { text: "<li>", correct: false },
      { text: "<dl>", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which CSS property controls the text size?",
    answers: [
      { text: "font-style", correct: false },
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "text-font", correct: false }
    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    answers: [
      { text: "msg('Hello World')", correct: false },
      { text: "alert('Hello World')", correct: true },
      { text: "msgBox('Hello World')", correct: false },
      { text: "alertBox('Hello World')", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to display images?",
    answers: [
      { text: "<img>", correct: true },
      { text: "<image>", correct: false },
      { text: "<pic>", correct: false },
      { text: "<src>", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  answerButtons.forEach((btn, index) => {
    btn.innerText = currentQuestion.answers[index].text;
    btn.dataset.correct = currentQuestion.answers[index].correct;
    btn.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
    btn.style.backgroundColor = "#2575fc"; // Reset color every time
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.style.backgroundColor = "#4CAF50";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "#f44336";
  }

  answerButtons.forEach(btn => btn.disabled = true);
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();
