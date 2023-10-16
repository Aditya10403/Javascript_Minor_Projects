let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sub");
const userinput = document.querySelector("#guessField");
const guessSlot = document.querySelector("#guesses");
const remaining = document.querySelector("#lastresult");
const loworhi = document.querySelector("#loworhi");
const result = document.querySelector("#result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // does validation of guess input
  if (guess === "" || guess < 1 || guess > 100 || isNaN(guess)) {
    alert("Please Enter a valid number");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over . Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // copare the number
  if (guess === random) {
    displayMsg(`You Guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMsg(`Number is Too Low`);
  } else if (guess > random) {
    displayMsg(`Number is Too High`);
  }
}

function displayGuess(guess) {
  // update input value
  userinput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  // give message
  loworhi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  // if reaches the limit
  userinput.value = "";
  userinput.setAttribute("disabled", ""); // for using disabled must provide key,value pairs
  p.classList.add("button");
  p.innerHTML = `<button id="newGame" class="px-6 py-3 bg-slate-900 mt-4 rounded-md">Start new Game</button>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // start new game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute("disabled");
    result.removeChild(p);
    playGame = true;
  });
}
