/**
 * Declare Global Variables
 */
var timeEl = document.getElementById("timer");
var timer = 100;

/**
 * Create global variables for all the question buttons.
 */
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");

var question = document.getElementById("question");

var main = document.getElementById("main");
var start = document.getElementById("start");

var finalscore = 0;

start.addEventListener("click", startCodeQuiz);

function setTime() {
  var timerInterval = setInterval(function () {
    timer--;
    timeEl.textContent = "Time: " + timer;

    if (timer === 0) {
      clearInterval(timerInterval);

      /**TODO: Set a call that logs the score etc        main.innerHTML = "";*/
    }

  }, 1000);
}

function startCodeQuiz() {
  setTime();
  main.innerHTML = "";
  questionOne(event);
}

function questionOne() {

  question.textContent = "What number do you start an array with?";

  a1.style.visibility = "visible";
  a1.textContent = "0";
  a1.addEventListener("click", questionTwo, timer = timer + 10);

  a2.style.visibility = "visible";
  a2.textContent = "1";
  a2.addEventListener("click", questionTwo, timer = timer - 10);

  a3.style.visibility = "visible";
  a3.textContent = "2";
  a3.addEventListener("click", questionTwo, timer = timer - 10);

  a4.style.visibility = "visible";
  a4.textContent = "-1";
  a4.addEventListener("click", questionTwo, timer = timer - 10);

  e.stopPropogation();
}

function questionTwo() {

  question.textContent = "What does HTML stand for?";

  a1.style.visibility = "visible";
  a1.textContent = "Hyper Testosterone Male Lameness";
  a1.addEventListener("click", questionThree, timer = timer - 10);

  a2.style.visibility = "visible";
  a2.textContent = "Hyper Text Markup Language";
  a2.addEventListener("click", questionThree, timer = timer + 10);

  a3.style.visibility = "visible";
  a3.textContent = "Hyper Text Maker Language";
  a3.addEventListener("click", questionThree, timer = timer - 10);

  a4.style.visibility = "visible";
  a4.textContent = "Obviously Wrong Answer";
  a4.addEventListener("click", questionThree, timer = timer - 10);

  e.stopPropogation();
}

function questionThree() {

  question.textContent = "What does CSS stand for?";

  a1.style.visibility = "visible";
  a1.textContent = "Cool Soul Suckers";
  a1.addEventListener("click", questionTwo, timer = timer - 10);

  a2.style.visibility = "visible";
  a2.textContent = "Cold Stone Scissors";
  a2.addEventListener("click", questionTwo, timer = timer - 10);

  a3.style.visibility = "visible";
  a3.textContent = "Cascading Style Sheets";
  a3.addEventListener("click", questionTwo, timer = timer + 10);

  a4.style.visibility = "visible";
  a4.textContent = "Obviously Wrong Answer";
  a4.addEventListener("click", questionTwo, timer = timer - 10);

  e.stopPropogation();
}

function questionFour() {

  question.textContent = "What does CSS stand for?";

  a1.style.visibility = "visible";
  a1.textContent = "Cool Soul Suckers";
  a1.addEventListener("click", finalScore, timer = timer - 10);

  a2.style.visibility = "visible";
  a2.textContent = "Cold Stone Scissors";
  a2.addEventListener("click", finalScore, timer = timer - 10);

  a3.style.visibility = "visible";
  a3.textContent = "Cascading Style Sheets";
  a3.addEventListener("click", finalScore, timer = timer + 10);

  a4.style.visibility = "visible";
  a4.textContent = "Obviously Wrong Answer";
  a4.addEventListener("click", finalScore, timer = timer - 10);

}


function finalScore() {
  finalscore = timer;
}