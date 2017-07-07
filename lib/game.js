require('./index.css');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');
const Game = require('./Game-class.js')

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGame = new Game(3, 3, true)
const newPlayer1 = new Player1 (150, 350, 20, 20, '#A32428', newGame.dx, 0);
const newPlayer2 = new Player2 (600, 400, 20, 20, '#1B7AA2', -newGame.dx, 0);

context.font = '48px serif';
context.fillStyle = '#ff0000';
context.fillText('Press Spacebar to Begin Game', 70, 350);
context.textBaseline = 'bottom';


window.addEventListener('keydown', movePlayer1);
window.addEventListener('keydown', movePlayer2);
document.querySelector('.reset-btn').addEventListener('click', refresh);
window.addEventListener('keyup', startGame);
window.addEventListener('keyup', restartGame)
window.focus();

function gameLoop() {
  newGame.drawGrid();
  playerAction();
  animation();
  gameOver();
  newGame.levelUp();
  updateScore();
}

function animation() {
  if (newPlayer1.move === false || newPlayer2.move === false) {
    cancelAnimationFrame(gameLoop);
  } else {
    requestAnimationFrame(gameLoop);
  }
}

function playerAction() {
  newPlayer1.drawPlayer(context);
  newPlayer1.movePlayerVertical(newPlayer1.dy);
  newPlayer1.movePlayerHorizontal(newPlayer1.dx);
  newPlayer1.containPlayer();
  newPlayer1.drawTrail(context);
  newPlayer1.checkPlayer1Collision(newPlayer2);

  newPlayer2.drawPlayer(context);
  newPlayer2.movePlayerVertical(newPlayer2.dy);
  newPlayer2.movePlayerHorizontal(newPlayer2.dx);
  newPlayer2.containPlayer();
  newPlayer2.drawTrail(context);
  newPlayer2.checkPlayer2Collision(newPlayer1);
}

function startGame(event) {
  if (event.keyCode === 32 && newGame.startNextGame === true) {
    document.querySelector('.level-winner').textContent = '';
    newGame.startNextGame = false;
    resetPlayer1();
    resetPlayer2();
    gameLoop();
  }
}

function gameOver() {
  let levelNumber = parseInt(document.querySelector('.level-number').textContent);

  if (levelNumber > 3) {
    document.querySelector('.level-number').textContent = 'Game Over!';
    cancelAnimationFrame(gameLoop);
    newGame.startNextGame = false;
  }
}

function restartGame(event) {
  let gameOver = document.querySelector('.level-number').textContent;

  if (gameOver === 'Game Over!') {
    newGame.startNextGame = false;
  }

  if (event.keyCode === 13 && gameOver === 'Game Over!') {
    refresh();
  }
}

function refresh() {
  document.location.reload();
}

function movePlayer1 (event) {
  if (event.keyCode === 38 && newPlayer1.dy !== -newGame.dy) {
    newPlayer1.dx = 0;
    newPlayer1.dy = newGame.dy;
  } else if (event.keyCode === 40 && newPlayer1.dy !== newGame.dy) {
    newPlayer1.dx = 0;
    newPlayer1.dy = -newGame.dy;
  } else if (event.keyCode === 39 && newPlayer1.dx !== -newGame.dx) {
    newPlayer1.dx = newGame.dx;
    newPlayer1.dy = 0;
  } else if (event.keyCode === 37 && newPlayer1.dx !== newGame.dx) {
    newPlayer1.dx = -newGame.dx;
    newPlayer1.dy = 0;
  }
}

function movePlayer2 (event) {
  if (event.keyCode === 87 && newPlayer2.dy !== -newGame.dy) {
    newPlayer2.dx = 0;
    newPlayer2.dy = newGame.dy;
  } else if (event.keyCode === 83 && newPlayer2.dy !== newGame.dy) {
    newPlayer2.dx = 0;
    newPlayer2.dy = -newGame.dy;
  } else if (event.keyCode === 68 && newPlayer2.dx !== -newGame.dx) {
    newPlayer2.dx = newGame.dx;
    newPlayer2.dy = 0;
  } else if (event.keyCode === 65 && newPlayer2.dx !== newGame.dx) {
    newPlayer2.dx = -newGame.dx;
    newPlayer2.dy = 0;
  }
}

function updateScore() {
  let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
  let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);

  if (newPlayer2.crash === true || newPlayer2.move === false) {
    newGame.startNextGame = true;
    document.querySelector('.player-one-score').textContent = playerOneScore + 1;
    newPlayer1.wins += 1;
    cancelAnimationFrame(gameLoop);
    newGame.levelUp();
    trackWins();
  } else if (newPlayer1.crash === true || newPlayer1.move === false) {
    newGame.startNextGame = true;
    document.querySelector('.player-two-score').textContent = playerTwoScore + 1;
    newPlayer2.wins += 1;
    cancelAnimationFrame(gameLoop);
    newGame.levelUp();
    trackWins();
  }
}

function resetPlayer1() {
  newPlayer1.trail = [];
  newPlayer1.move = true;
  newPlayer1.crash = false;
  newPlayer1.x = 150;
  newPlayer1.y = 350;
  newPlayer1.dx = newGame.dx;
  newPlayer1.dy = 0;
}

function resetPlayer2() {
  newPlayer2.trail = [];
  newPlayer2.move = true;
  newPlayer2.crash = false;
  newPlayer2.x = 600;
  newPlayer2.y = 400;
  newPlayer2.dx = -newGame.dx;
  newPlayer2.dy = 0;
}

function trackWins() {

  if (newPlayer1.wins === 3 && newPlayer1.roundsWon <= 3) {
    newPlayer1.roundsWon += 1;
    newPlayer1.wins = 0;
    document.querySelector('.level-winner').textContent = 'Player 1 Wins';
  } else if (newPlayer2.wins === 3 && newPlayer2.roundsWon <= 3) {
    newPlayer2.roundsWon += 1;
    newPlayer2.wins = 0;
    document.querySelector('.level-winner').textContent = 'Player 2 Wins';
  }
}
