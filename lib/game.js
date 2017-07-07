require('./index.css');
const Grid = require('./Grid.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

let startNextGame = true;
let dx = 3;
let dy = 3;

const newGrid = new Grid(750, 750, "#161819", 0, 0);
const newPlayer1 = new Player1 (150, 350, 20, 20, '#A32428', dx, 0);
const newPlayer2 = new Player2 (600, 400, 20, 20, '#1B7AA2', -dx, 0);

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

function animation() {
  if (newPlayer1.move === false || newPlayer2.move === false) {
    cancelAnimationFrame(gameLoop);
  } else {
    requestAnimationFrame(gameLoop);
  }
}

function drawGrid() {
  resetGame();
  newGrid.draw(context);
  newGrid.drawGridLines(context);
}

function gameLoop() {
  drawGrid();
  playerAction();
  animation();
  gameOver();
  levelUp();
  updateScore();
}

function gameOver() {
  let levelNumber = parseInt(document.querySelector('.level-number').textContent);

  if ((levelNumber > 3) || (newPlayer1.roundsWon === 3 || newPlayer2.roundsWon === 3)) {
    document.querySelector('.level-number').textContent = 'Game Over!';
    document.querySelector('.level-winner').textContent = 'Push enter to restart game';
    resetPlayer1();
    resetPlayer2();
    resetGame();
    cancelAnimationFrame(gameLoop);
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

function levelUp() {
  let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
  let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);
  let levelNumber = parseInt(document.querySelector('.level-number').textContent);

  if (playerOneScore >= 3 || playerTwoScore >= 3) {
    document.querySelector('.player-one-score').textContent = 0;
    document.querySelector('.player-two-score').textContent = 0;
    document.querySelector('.level-number').textContent = levelNumber + 1;
  }
}

function movePlayer1 (event) {
  if (event.keyCode === 38 && newPlayer1.dy !== -dy) {
    newPlayer1.dx = 0;
    newPlayer1.dy = dy;
  } else if (event.keyCode === 40 && newPlayer1.dy !== dy) {
    newPlayer1.dx = 0;
    newPlayer1.dy = -dy;
  } else if (event.keyCode === 39 && newPlayer1.dx !== -dx) {
    newPlayer1.dx = dx;
    newPlayer1.dy = 0;
  } else if (event.keyCode === 37 && newPlayer1.dx !== dx) {
    newPlayer1.dx = -dx;
    newPlayer1.dy = 0;
  }
}

function movePlayer2 (event) {
  if (event.keyCode === 87 && newPlayer2.dy !== -dy) {
    newPlayer2.dx = 0;
    newPlayer2.dy = dy;
  } else if (event.keyCode === 83 && newPlayer2.dy !== dy) {
    newPlayer2.dx = 0;
    newPlayer2.dy = -dy;
  } else if (event.keyCode === 68 && newPlayer2.dx !== -dx) {
    newPlayer2.dx = dx;
    newPlayer2.dy = 0;
  } else if (event.keyCode === 65 && newPlayer2.dx !== dx) {
    newPlayer2.dx = -dx;
    newPlayer2.dy = 0;
  }
}

function refresh() {
  document.location.reload();
}

function resetGame() {
  startNextGame = false;
}

function resetPlayer1() {
  newPlayer1.trail = [];
  newPlayer1.move = true;
  newPlayer1.crash = false;
  newPlayer1.x = 150;
  newPlayer1.y = 350;
  newPlayer1.dx = dx;
  newPlayer1.dy = 0;
}

function resetPlayer2() {
  newPlayer2.trail = [];
  newPlayer2.move = true;
  newPlayer2.crash = false;
  newPlayer2.x = 600;
  newPlayer2.y = 400;
  newPlayer2.dx = -dx;
  newPlayer2.dy = 0;
}

function restartGame(event) {
  let gameOver = document.querySelector('.level-number').textContent;

  if (gameOver === 'Game Over!') {
    resetGame();
  }

  if (event.keyCode === 13 && gameOver === 'Game Over!') {
    refresh();
  }
}

function speedUp() {
  dx += 2;
  dy += 2;
}

function startGame(event) {
  if (event.keyCode === 32 && startNextGame === true) {
    document.querySelector('.level-winner').textContent = '';
    resetPlayer1();
    resetPlayer2();
    resetGame();
    gameLoop();
  }
}

function trackWins() {
  if (newPlayer1.wins === 3 && newPlayer1.roundsWon <= 3) {
    newPlayer1.roundsWon += 1;
    newPlayer1.wins = 0;
    document.querySelector('.level-winner').textContent = 'Player 1 Wins';
    speedUp();
  } else if (newPlayer2.wins === 3 && newPlayer2.roundsWon <= 3) {
    newPlayer2.roundsWon += 1;
    newPlayer2.wins = 0;
    document.querySelector('.level-winner').textContent = 'Player 2 Wins';
    speedUp();
  }
}

function updateScore() {
  let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
  let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);

  if (newPlayer2.crash === true || newPlayer2.move === false) {
    document.querySelector('.player-one-score').textContent = playerOneScore + 1;
    newPlayer1.wins += 1;
    startNextGame = true;
    cancelAnimationFrame(gameLoop);
    trackWins();
  } else if (newPlayer1.crash === true || newPlayer1.move === false) {
    startNextGame = true;
    document.querySelector('.player-two-score').textContent = playerTwoScore + 1;
    newPlayer2.wins += 1;
    cancelAnimationFrame(gameLoop);
    trackWins();
  }
}
