require('./index.css');
const Grid = require('./Grid.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGrid = new Grid(750, 750, "#7C7C7C", 0, 0);
const newPlayer1 = new Player1 (150, 350, 20, 20, '#A32428');
const newPlayer2 = new Player2 (600, 400, 20, 20, '#1B7AA2');


let playerOneDirection = {
  x: 2,
  y: 0,
}

let playerTwoDirection = {
  x: -2,
  y: 0,
}

window.addEventListener('keydown', movePlayer1);
window.addEventListener('keydown', movePlayer2);

function gameLoop() {
  newGrid.draw(context);
  newGrid.drawGridX(context);
  newGrid.drawGridY(context);

  newPlayer1.drawPlayer(context);
  newPlayer1.movePlayerVertical(playerOneDirection.y);
  newPlayer1.movePlayerHorizontal(playerOneDirection.x);
  newPlayer1.containPlayer();
  newPlayer1.drawTrail(context);
  newPlayer1.checkPlayer1Collision(newPlayer2);

  newPlayer2.drawPlayer(context);
  newPlayer2.movePlayerVertical(playerTwoDirection.y);
  newPlayer2.movePlayerHorizontal(playerTwoDirection.x);
  newPlayer2.containPlayer();
  newPlayer2.drawTrail(context);
  newPlayer2.checkPlayer2Collision(newPlayer1);

  updateScore();

  if (newPlayer1.move === false || newPlayer2.move === false) {
    cancelAnimationFrame(gameLoop);
    console.log('game over')
  } else {
    this.move;
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', movePlayer1);
window.addEventListener('keydown', movePlayer2);

function movePlayer1 (event) {
  if (event.keyCode === 38 && playerOneDirection.y !== -2) {
    playerOneDirection.x = 0;
    playerOneDirection.y = 2;
  } else if (event.keyCode === 40 && playerOneDirection.y !== 2) {
    playerOneDirection.x = 0;
    playerOneDirection.y = -2;
  } else if (event.keyCode === 39 && playerOneDirection.x !== -2) {
    playerOneDirection.x = 2;
    playerOneDirection.y = 0;
  } else if (event.keyCode === 37 && playerOneDirection.x !== 2) {
    playerOneDirection.x = -2;
    playerOneDirection.y = 0;
  }
}

function movePlayer2 (event) {
  if (event.keyCode === 87 && playerTwoDirection.y !== -2) {
    playerTwoDirection.x = 0;
    playerTwoDirection.y = 2;
  } else if (event.keyCode === 83 && playerTwoDirection.y !== 2) {
    playerTwoDirection.x = 0;
    playerTwoDirection.y = -2;
  } else if (event.keyCode === 68 && playerTwoDirection.x !== -2) {
    playerTwoDirection.x = 2;
    playerTwoDirection.y = 0;
  } else if (event.keyCode === 65 && playerTwoDirection.x !== 2) {
    playerTwoDirection.x = -2;
    playerTwoDirection.y = 0;
  }
}

function updateScore() {
  let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);
  if (newPlayer1.crashed === true && playerTwoScore < 3) {
    document.querySelector('.player-two-score').textContent = playerTwoScore + 1;
  }

  let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
  if (newPlayer2.crashed === true && playerOneScore < 3) {
    document.querySelector('.player-one-score').textContent = playerOneScore + 1;
  }
}
