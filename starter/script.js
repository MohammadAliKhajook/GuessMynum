'use strict';
// Selecting Elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// stating con
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let CurrentScore = 0;
let activePlayer = 0;

let switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  CurrentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1.Generating a random rice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display a dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3.check for rolled 1 : if true , swich to next player
  if (dice !== 1) {
    CurrentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      CurrentScore;
  } else {
    //  swich to next player

    switchPlayer();
  }
});
btnHold.addEventListener('click', () => {
  console.log('hold');
  // add currnet score to the active player
  scores[activePlayer] += CurrentScore;
  // scores[1]=scores[1]+currentscore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  scores[activePlayer];
  // check if the current score below 100
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player---${activePlayer}`)
      .classList.add('player--wiiner');
    document
      .querySelector(`.player---${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // switch to the next playere
    switchPlayer();
  }
});
