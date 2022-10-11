var countdown = 13;
const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const questionBox = document.getElementById("question-box");
const answerBtn = document.getElementsByClassName('answer-btn');
let shuffledQuestions, currentQuestionIndex;

//https://theprogrammingexpert.com/javascript-countdown-timer/
const timero = function () {
  var timer = setInterval(function () {
    document.getElementById("time").innerHTML = "<b>" + countdown + "</b>";
    countdown--;
    if (countdown == -1) {
      clearInterval(timer);
      // document.getElementById('time').innerHTML = "";
    }
  }, 1000);
};

//Starts timer, hides start, shows questions
const initButton = () => {
  startBtn.addEventListener("click", function () {
    questionEl.classList.remove("hide");
    questionBox.classList.remove("hide");
    startBtn.classList.add("hide");
    timero();
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    presentQuestion(questions[questionIndex]);
  });
};

const questions = [
  {
    prompt: "question 1",
    answers: [
        {text: '1', correct: true},
        {text: '2', correct: false},
        {text: '3', correct: false},
        {text: '4', correct: false}
    ],
    correctIndex: 1,
  },
  {
    prompt: "question 2",
    answers: ["Answer2", "Answer2", "Answer3", "Answer4"],
    correctIndex: 1,
  },
];

//Changes question and answers text.
const presentQuestion = (questions) => {
  questionEl.innerText = questions.prompt;
  document.getElementById("answer1").innerText = questions.answers[0];
  document.getElementById("answer2").innerText = questions.answers[1];
  document.getElementById("answer3").innerText = questions.answers[2];
  document.getElementById("answer4").innerText = questions.answers[3];
  answerBtn.addEventListener("click", selectAnswer());
};

const selectAnswer = () => {}

//Function to initialize page.
const init = () => {
  initButton();
};

//Runs initialization function upon page load.
window.onload = init;
