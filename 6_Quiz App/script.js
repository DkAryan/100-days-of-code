const quizQuestions = [
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 1 = ('red'), 2 = ('green')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green')",
      "var colors = 'red', 'green', 'blue'",
    ],
    correctIndex: 1,
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctIndex: 0,
  },
  {
    question: "What is the index of the first element in a JavaScript array?",
    options: ["1", "0", "-1", "Any number"],
    correctIndex: 1,
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["shift()", "slice()", "pop()", "push()"],
    correctIndex: 2,
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",
    options: [
      "typeof variable === 'array'",
      "variable.isArray()",
      "Array.isArray(variable)",
      "variable instanceof Array",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which array method creates a new array by performing a function on each array element?",
    options: ["filter()", "forEach()", "map()", "reduce()"],
    correctIndex: 2,
  },
  {
    question: "What does the 'length' property of an array return?",
    options: [
      "The number of elements in the array",
      "The size of the array in bytes",
      "The index of the last element",
      "The total sum of elements",
    ],
    correctIndex: 0,
  },
  {
    question: "Which method is used to join two or more arrays?",
    options: ["concat()", "join()", "push()", "merge()"],
    correctIndex: 0,
  },
  {
    question: "What is the purpose of the 'splice()' method?",
    options: [
      "To remove elements only",
      "To add elements only",
      "To add and/or remove elements",
      "To sort the array",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which method returns a new array with all elements that pass a test?",
    options: ["map()", "filter()", "every()", "some()"],
    correctIndex: 1,
  },
];

let question = document.querySelector("#question");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let opt4 = document.querySelector("#opt4");

let testtittle = document.querySelector("#test-tittle")
let scoreboard = document.querySelector(".score-board");

console.log(scoreboard);  

let score = document.querySelector("#score");
let total = document.querySelector("#total");
total.innerText = quizQuestions.length;
let scoreValue = 0;
score.innerText = scoreValue;

let start = document.querySelector("#start");
let next = document.querySelector("#next");

// console.log(question, opt1, opt2, opt3, opt4, score, total, start, next);

  scoreboard.style.display = "none";
  question.style.display = "none";
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";



let currentQuestionIndex = 0;

function loadQuestion() {
  let index = quizQuestions[currentQuestionIndex];

  
  question.innerText = index.question;
  opt1.innerText = index.options[0];
  opt2.innerText = index.options[1];
  opt3.innerText = index.options[2];
  opt4.innerText = index.options[3];

  selectedIndex = null;

  opt1.disabled = false;
  opt2.disabled = false;
  opt3.disabled = false;
  opt4.disabled = false;
}

start.addEventListener("click", function () {

  testtittle.style.display = "none"
  scoreboard.style.display = "";
question.style.display = "";
    opt1.style.display = "";
    opt2.style.display = "";
    opt3.style.display = "";
    opt4.style.display = "";



  start.style.display = "none";
  scoreValue = 0;
  score.innerText = scoreValue;
  loadQuestion();
});

let selectedIndex = null;

opt1.addEventListener("click", function () {
  optionclick(0);
});
opt2.addEventListener("click", function () {
  optionclick(1);
});
opt3.addEventListener("click", function () {
  optionclick(2);
});
opt4.addEventListener("click", function () {
  optionclick(3);
});

function optionclick(index) {
  if (selectedIndex !== null) {
    return;
  }
  selectedIndex = index;
  console.log(selectedIndex);

  let currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctIndex) {
    scoreValue++;
    score.innerText = scoreValue;

    console.log(score);
  }
  opt1.disabled = true;
  opt2.disabled = true;
  opt3.disabled = true;
  opt4.disabled = true;
}

next.addEventListener("click", function () {
  if (selectedIndex === null) {
    alert("Please Select Option");
    return;
  }
currentQuestionIndex++;

if (currentQuestionIndex >= quizQuestions.length) {
  question.innerText = "Quiz Finished! 🎉 Your Score is: " + scoreValue;

  opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";

    next.style.display = "none";

    return;
}
  loadQuestion();
})
