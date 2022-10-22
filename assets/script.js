var countdown = 30;
const quiz = document.getElementById("quiz");
var questionIndex = 0;
let questionBox = document.createElement("div");
questionBox.setAttribute("id", "question-box");
quiz.append(questionBox);

//https://theprogrammingexpert.com/javascript-countdown-timer/
const timero = function () {
  var timer = setInterval(function () {
    document.getElementById("time").innerHTML = "<b>" + countdown + "</b>";
    countdown--;
    if (countdown == -1) {
      clearInterval(timer);
      // document.getElementById('time').innerHTML = "";
    }
    if ( questionIndex == 3) {
      clearInterval(timer);
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
      { id:"0", text: "2", correct: true },
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

const addNameForm = () => {
  let nameForm = document.createElement('form')
  nameForm.innerHTML = (`
  <input type='text'></input>
  <button type='submit' class='submit-btn'></button>`)
  quiz.append(nameForm);
}

const endQuiz = () => {
  console.log('end')
  let scoreEl = document.createElement('div');
  scoreEl.setAttribute('class', "score")
  scoreEl.innerHTML = "score" + countdown;
  quiz.append(scoreEl);
  addNameForm();
}

//generates and displays answer elements on question box
const addAnswers = () => {
  let ans = questions[questionIndex].answers;
  let questionBox = document.getElementById("question-box");
  questionIndex ++;
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
      if( questionIndex == questions.length) {
        quiz.innerHTML = '';
        endQuiz()
        //stop timer
      }
      //nextQuestion();
      if( questionIndex != questions.length) {
        questionBox.innerHTML = '';
        addQuestions()
        addAnswers()
      }
    });
    //grab content from individual div
    // progress index
    //correct check...
  }
};

//generates and adds a question box div with a question element child
const addQuestions = () => {
  let questionEl = document.createElement("h2");
  questionEl.innerHTML = questions[questionIndex].prompt;
  questionBox.append(questionEl);
};

//adds a timer element to quiz
const addTimer = () => {
  let timeEl = document.createElement("div");
  timeEl.setAttribute("id", "time");
  quiz.prepend(timeEl);
};

//adds timer el question box with question and answers. Also starts timer
const startQuiz = () => {
  addTimer();
  addQuestions();
  addAnswers();
  timero();
};

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
