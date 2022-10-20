var countdown = 13;
const quiz = document.getElementById("quiz");
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

const questions = [
  {
    prompt: "question 1",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    prompt: "question 2",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    prompt: "question 3",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
];

//generates start button
const addStartButton = () => {
  let btn = document.createElement("button");
  btn.innerHTML = "start";
  btn.classList.add("start-btn");
  quiz.append(btn);
};

//Displays start button on page load
const init = () => {
  addStartButton();
};

const addAnswers = () => {
  let ans = questions[0].answers;
  let questionBox = document.getElementById("question-box");
  console.log(ans);
  for (let i = 0; i < ans.length; i++) {
    let ansEl = document.createElement("div");
    ansEl.setAttribute("class", "answer");
    ansEl.innerHTML = ans[i].text;
    questionBox.append(ansEl);
  }
};

const addQuestions = () => {
  let questionBox = document.createElement("div");
  let questionEl = document.createElement("h2");
  questionEl.innerHTML = questions[0].prompt;
  questionBox.setAttribute("id", "question-box");
  questionBox.append(questionEl);
  quiz.append(questionBox);
};

const addTimer = () => {
  let timeEl = document.createElement("div");
  timeEl.setAttribute("id", "time");
  quiz.append(timeEl);
};

const clickAnswer = (event) => {
  let target = event.target;
  console.log(target);
};

const startQuiz = () => {
  addTimer();
  addQuestions();
  addAnswers();
  timero();
};

quiz.addEventListener("click", function (event) {
  let target = event.target;
  let targetClass = event.target.classList.value;
  if (targetClass == "start-btn") {
    target.classList.add("hide");
    startQuiz();
  }
});

window.onload = init();
