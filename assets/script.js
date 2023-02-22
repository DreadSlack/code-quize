var strButton = document.querySelector('.start-button');
var timerBox = document.querySelector('.timer-box');
var timerElement = document.querySelector('.timer'); 
var questionBox = document.querySelector('.question-box');
var questionEl = document.querySelector('#questions');
var answersEl = document.querySelector('#answers');
var scoreName = document.querySelector('#name');
var scoreScore = document.querySelector('#score');
const questions = [
    {question:"a", answers:["a", "b", "c", "d"], correctAnswer:"c"},
    {question:"b", answers:["a", "b", "c", "d"], correctAnswer:"a"},
    {question:"c", answers:["a", "b", "c", "d"], correctAnswer:"c"},
    {question:"d", answers:["a", "b", "c", "d"], correctAnswer:"b"},
    {question:"e", answers:["a", "b", "c", "d"], correctAnswer:"d"},
];

let timerValue = 0;
let timerId;

strButton.addEventListener('click', gameTimerStart);

function displayQuestion() {
    const randomQuestion = getRandomQuestion();
    questionEl.textContent = randomQuestion.question;
    answersEl.innerHTML = "";
    randomQuestion.answers.forEach(answer => {
      const li = document.createElement("li");
      li.textContent = answer;
      answersEl.appendChild(li);
    });
}

function gameTimerStart(){
    timerValue += 10;
    timerElement.textContent = timerValue
    const timerId = setInterval(function() {
        timerValue--;
        timerElement.textContent = timerValue;
        if (timerValue <= 0) {
          clearInterval(timerId);
          alert('Game Over!');
          storeScore();
        }
      }, 1000);
    displayQuestion();
}

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function storeScore() {
    const name = prompt("Please enter your initials:");
    scoreName.textContent = name;
    scoreScore.textContent = timerValue;
    localStorage.setItem('name', name);
    localStorage.setItem('score', timerValue);
  }

const storedName = localStorage.getItem('name');
const storedScore = localStorage.getItem('score');
