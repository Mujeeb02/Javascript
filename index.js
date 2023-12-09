const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subm');
const userinput = document.querySelector('#guessField');
const previousguesses = document.querySelector('.guesses');
const Remainingslot = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.loworhi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prev = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}
function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number less than 100');
  } else {
    prev.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMessage(`Sorry, Your real number was: ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guess it right`);
  } else if (guess < randomNumber) {
    displayMessage(`your guess is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`your guess is too high`);
  }
}

function displayGuess(guess) {
  userinput.value = '';
  previousguesses.innerHTML = `${prev}`;
  numguess += 1;
  Remainingslot.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prev = [];
    numguess = 1;
    previousguesses.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);

    playgame = true;
  });
}
