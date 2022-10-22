var countdown = 30;
const quiz = document.getElementById("quiz");
var questionBoxEl;

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
      { id:"0", text: "1", correct: false },
      { id:"1", text: "2", correct: true },
      { id:"2", text: "3", correct: false },
      { id:"3", text: "4", correct: false },
    ],
  },
  {
    prompt: "question 2",
    answers: [
      { id:"0", text: "1", correct: true },
      { id:"1", text: "2", correct: false },
      { id:"2", text: "3", correct: false },
      { id:"3", text: "4", correct: false },
    ],
  },
  {
    prompt: "question 3",
    answers: [
      { id:"0", text: "1", correct: true },
      { id:"1", text: "2", correct: false },
      { id:"2", text: "3", correct: false },
      { id:"3", text: "4", correct: false },
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

//generates and displays answer elements on question box
const addAnswers = () => {
  let ans = questions[0].answers;
  let questionBox = document.getElementById("question-box");
  console.log(ans);
  for (let i = 0; i < ans.length; i++) {
    let ansEl = document.createElement("div");
    ansEl.setAttribute("class", "answer");
    ansEl.innerHTML = ans[i].text;
    if( ans[i].correct == true) {
      ansEl.dataset.correct = true;
    };
    if( ans[i].correct == false) {
      ansEl.dataset.correct = false;
    };
    questionBox.append(ansEl);

    ansEl.addEventListener('click', function(e){
      const answer = e.target;
      const answerCorrect = answer.dataset.correct;
      console.log(answer);
      console.log(answerCorrect);
      if( answerCorrect == 'true' ) {
        //display correct
      }
      if( answerCorrect == 'false' ) {
        countdown -= 5;
        //display incorrect
      }
      //nextQuestion();
    });
    //add event listener here & console.log
    //grab content from individual div
    // progress index
    //correct check...
  }
};

//generates and adds a question box div with a question element child
const addQuestions = () => {
  let questionBox = document.createElement("div");
  let questionEl = document.createElement("h2");
  questionEl.innerHTML = questions[0].prompt;
  questionBox.setAttribute("id", "question-box");
  questionBox.append(questionEl);
  quiz.append(questionBox);
};

//adds a timer element to quiz
const addTimer = () => {
  let timeEl = document.createElement("div");
  timeEl.setAttribute("id", "time");
  quiz.append(timeEl);
};

//adds timer el question box with question and answers. Also starts timer
const startQuiz = () => {
  addTimer();
  addQuestions();
  addAnswers();
  timero();
  // questionBoxEl = document.getElementById('question-box');
};

// questionBoxEl.addEventListener('click', function() {
// console.log('click')
// });
//Starts quiz when start button is pressed
quiz.addEventListener("click", function (event) {
  let target = event.target;
  let targetClass = event.target.classList.value;
  if (targetClass == "start-btn") {
    target.classList.add("hide");
    startQuiz();
  }
});

window.onload = init();
