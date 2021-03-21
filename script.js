'use strict';

// selecting players
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

// these variables are used to perform addition to add up scoring
let currPlayer1 = 0;
let currPlayer2 = 0;

let totalPlayer1 = 0;
let totalPlayer2 = 0;

//leaving these two elements as arrays so I can cut down on the number of variables. [0] is player1 [1] is player 2
let currentScores = document.getElementsByClassName('current-score');

let totalScores = document.getElementsByClassName('score');

// selecting all buttons
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

// function to toggle active state
function activeToggle(player1, player2) {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

// selecting dice img element for changing src
let diceImg = document.querySelector('.dice');

// creating variable to hold dice roll. This will be passed into the game logic function called scorekeeper
let rollVal = 0;

// creating roll dice function that creates a random number and sets the img src to the proper image;
function rollDice(min, max) {
  if(diceImg.classList.contains('hidden')){
    diceImg.classList.remove('hidden');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  rollVal = Math.floor(Math.random() * (max - min + 1) + min);
  diceImg.src = `dice-${rollVal}.png`;
}

// creating function that will accept the rollVal variable as a parameter and work with its value for score setting and turn ending. The function will run a switch statement that performs a task based on dice roll.
function scoreKeeper(rollVal) {
  if (player1.classList.contains('player--active')) {
    switch (rollVal) {
      case 1:
        currentScores[0].innerHTML = `${0}`;
        currPlayer1 = 0;
        activeToggle(player1, player2);
        break;
      case 2:
        currPlayer1 += rollVal;
        currentScores[0].innerHTML = `${currPlayer1}`;
        break;
      case 3:
        currPlayer1 += rollVal;
        currentScores[0].innerHTML = `${currPlayer1}`;
        break;
      case 4:
        currPlayer1 += rollVal;
        currentScores[0].innerHTML = `${currPlayer1}`;
        break;
      case 5:
        currPlayer1 += rollVal;
        currentScores[0].innerHTML = `${currPlayer1}`;
        break;
      case 6:
        currPlayer1 += rollVal;
        currentScores[0].innerHTML = `${currPlayer1}`;
        break;
    }
  } else {
    switch (rollVal) {
      case 1:
        currentScores[1].innerHTML = `${0}`;
        currPlayer2 = 0;
        activeToggle(player1, player2);
        break;
      case 2:
        currPlayer2 += rollVal;
        currentScores[1].innerHTML = `${currPlayer2}`;
        break;
      case 3:
        currPlayer2 += rollVal;
        currentScores[1].innerHTML = `${currPlayer2}`;
        break;
      case 4:
        currPlayer2 += rollVal;
        currentScores[1].innerHTML = `${currPlayer2}`;
        break;
      case 5:
        currPlayer2 += rollVal;
        currentScores[1].innerHTML = `${currPlayer2}`;
        break;
      case 6:
        currPlayer2 += rollVal;
        currentScores[1].innerHTML = `${currPlayer2}`;
        break;
    }
  }
}

// hold buton functionality toggles active class, adds current score to total score and resets current score based on who has the active class upon pressing the button
function hold() {
  if (player1.classList.contains('player--active')) {
    totalPlayer1 += currPlayer1;
    totalScores[0].innerHTML = `${totalPlayer1}`;
    currentScores[0].innerHTML = `${0}`;
    currPlayer1 = 0;
    
  } else {
    totalPlayer2 += currPlayer2;
    totalScores[1].innerHTML = `${totalPlayer2}`
    currentScores[1].innerHTML = `${0}`;
    currPlayer2 = 0;
  }
  activeToggle(player1, player2);
}

// event handler on hold button that calls the hold function
btnHold.addEventListener('click', hold);

// roll button calls the dice roll function. and then calls the scorekeep function on each click.
btnRoll.addEventListener('click', () => {
  rollDice(1, 6);
  scoreKeeper(rollVal);
})

// new game function
function newGame(){
  for(let score of totalScores){
    score.innerHTML = `${0}`;
  }
  for(let score of currentScores){
    score.innerHTML =`${0}`;
  }
  currPlayer1 = 0;
  currPlayer2 = 0;
}

btnNew.addEventListener('click', newGame);