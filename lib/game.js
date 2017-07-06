require('./index.css');
const Grid = require('./Grid.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

let startNextGame = true;
let dx = 2;
let dy = 2;

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

function gameLoop() {
  drawGrid();
  playerAction();
  updateScore();
  animation();
  gameOver();
}

function animation() {
  if (newPlayer1.move === false || newPlayer2.move === false) {
    cancelAnimationFrame(gameLoop);
  } else {
    requestAnimationFrame(gameLoop);
  }
}

function drawGrid() {
  startNextGame = false;
  newGrid.draw(context);
  newGrid.drawGridLines(context);
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
  if (event.keyCode === 32 && startNextGame === true) {
    levelUp();
    resetPlayer1();
    resetPlayer2();
    resetGame();
    gameLoop();
  }
}

function levelUp() {
  let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
  let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);
  let levelNumber = parseInt(document.querySelector('.level-number').textContent);

  if (playerOneScore === 3 || playerTwoScore === 3) {

    document.querySelector('.level-number').textContent = levelNumber + 1;
    document.querySelector('.player-one-score').textContent = 0;
    document.querySelector('.player-two-score').textContent = 0;
    speedUp();
  }
}

function gameOver() {
  let levelNumber = parseInt(document.querySelector('.level-number').textContent);

  if (levelNumber === 4) {
    // startNextGame = false;
    document.querySelector('.level-number').textContent = 'Game Over!';
    cancelAnimationFrame(gameLoop);
  }
}

function restartGame(event) {
  let gameOver = document.querySelector('.level-number').textContent;

  if (gameOver === 'Game Over!') {
    startNextGame = false;
  }

  if (event.keyCode === 13 && gameOver === 'Game Over!') {
    refresh();
  }
}

function speedUp() {
  dx += 2;
  dy += 2;
}

function refresh() {
  document.location.reload();
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

function updateScore() {
  let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
  let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);

  if (newPlayer2.crash === true || newPlayer2.move === false) {
    startNextGame = true;
    document.querySelector('.player-one-score').textContent = playerOneScore + 1;
    cancelAnimationFrame(gameLoop);
  } else if (newPlayer1.crash === true || newPlayer1.move === false) {
    startNextGame = true;
    document.querySelector('.player-two-score').textContent = playerTwoScore + 1;
    cancelAnimationFrame(gameLoop);
  }
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

function resetGame() {
  startNextGame = false;
}
