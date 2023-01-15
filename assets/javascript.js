// var quizContainer = document.getElementsByClassName("quiz-container");
// var mainPage = document.getElementById("main-page");
// var startButton = document.getElementById("starter-button");
// var questionArea = document.getElementsByClassName("question-area");
// var choices = document.getElementById("choices");
// var timer = document.querySelector(".seconds");
// var secondsLeft = 10
// var timeId;

// using an array of objects in order to loop through each index (question each object represents one questions)
var questions = [
  {
    title: "Variables can use spaces when __.",
    choices: [
      "You have a for statement",
      "You attach no HTML",
      "There is no Var",
      "None of the above",
    ],
    answers: "None of the above",
  },
  {
    title: "Arrays in JavaScript can be used to store __",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answers: "All of the above",
  },
  {
    title: "A very useful tool durring debugging is __",
    choices: ["JavaScript", "Terminal", "Console.Log", "Html"],
    answers: "None of the above",
  },
  {
    title: "Commonly used data types do NOT include __.",
    choices: [
      "Strings",
      "Alters",
      "Booleans",
      "Numbers",
    ],
    answers: "Alters",
  },
];

var quizContainer = document.querySelector(".quiz-container");
var mainPage = document.getElementById("main-page");
var startButton = document.getElementById("starter-button");
var questionArea = document.querySelector(".question-area");
var choices = document.getElementById("choices");
var timer = document.getElementById("seconds");
var secondsLeft = 10;
var timeId;
var currentQuestionIndex = 0;
var score = 0;

function start() {
  mainPage.setAttribute("class", "hide");
  questionArea.removeAttribute("class");
timeId= setInterval(startTimer, 1000);
timer.textContent=secondsLeft;
questionChange(); 
}

function questionChange(){
// getting the current question from the array
var currentQuestion= questions[currentQuestionIndex]

// change question text based on question
var questionTitle= document.getElementById("question-title")
questionTitle.textContent = currentQuestion.title

//clear out old choices
choices.innerHTML = "";

// for loop to loop through choices
for (var i = 0; i < currentQuestion.choices.length; i++){
  //create a button for each choice
  var choice= currentQuestion.choices[i];
  var choiceNode= document.createElement("button");
  choiceNode.setAttribute("class","choice");
  choiceNode.setAttribute("value", choice);
  choiceNode.textContent= i + 1 + ". " + choice; 
  
  // append to the page
  
  choices.appendChild(choiceNode)
}
}

function startTimer(){
  secondsLeft--
   timer.textContent=secondsLeft;
  // will updater html every second
}
startButton.addEventListener("click", function () {
  start();

});
