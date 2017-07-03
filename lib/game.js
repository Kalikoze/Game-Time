require('./index.css');
const Grid = require('./Grid.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGrid = new Grid(750, 750, "#485056", 0, 0);
const newPlayer1 = new Player1 (370, 340, 20, 20, '#aa19b5');
const newPlayer2 = new Player2 (340, 340, 20, 20, 'orange');


let playerOneDirection = {
  x: 0,
  y: -5,
}

let playerTwoDirection = {
  x: 0,
  y: 5,
}

window.addEventListener('keydown', movePlayer1);
window.addEventListener('keydown', movePlayer2);

function gameLoop() {
  newGrid.draw(context);
  newGrid.drawGridX(context);
  newGrid.drawGridY(context);
  newPlayer1.drawPlayer(context);
  newPlayer2.drawPlayer(context);
  newPlayer1.movePlayerVertical(playerOneDirection.y);
  newPlayer1.movePlayerHorizontal(playerOneDirection.x);
  newPlayer1.containPlayer();
  newPlayer1.drawTrail(context);
  newPlayer2.movePlayerVertical(playerTwoDirection.y);
  newPlayer2.movePlayerHorizontal(playerTwoDirection.x);
  newPlayer2.drawTrail(context);
  // newGrid.checkCollision(newPlayer1.x, newPlayer1.y, newPlayer2.x, newPlayer2.y);
  newPlayer1.checkPlayer1Collision(newPlayer2);
  newPlayer2.checkPlayer2Collision(newPlayer1);
  if (newPlayer1.move === false || newPlayer2.move === false) {
    cancelAnimationFrame(gameLoop);
    console.log('game over')
    console.log(newPlayer1.trail)
  } else {
  requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', movePlayer1);
window.addEventListener('keydown', movePlayer2);


// function gameOver(gameLoop) {
//   if (newPlayer1.move === false || newPlayer2.move === false) {
//     cancelAnimationFrame(gameLoop);
//     console.log('game over')
//   } else {
//   requestAnimationFrame(gameLoop);
//   }
// }

function movePlayer1 (event) {
  if (event.keyCode === 38 && playerOneDirection.y !== -5) {
    playerOneDirection.x = 0;
    playerOneDirection.y = 5;
  } else if (event.keyCode === 40 && playerOneDirection.y !== 5) {
    playerOneDirection.x = 0;
    playerOneDirection.y = -5;
  } else if (event.keyCode === 39 && playerOneDirection.x !== -5) {
    playerOneDirection.x = 5;
    playerOneDirection.y = 0;
  } else if (event.keyCode === 37 && playerOneDirection.x !== 5) {
    playerOneDirection.x = -5;
    playerOneDirection.y = 0;
  }
}

function movePlayer2 (event) {
  if (event.keyCode === 87 && playerTwoDirection.y !== -5) {
    playerTwoDirection.x = 0;
    playerTwoDirection.y = 5;
  } else if (event.keyCode === 83 && playerTwoDirection.y !== 5) {
    playerTwoDirection.x = 0;
    playerTwoDirection.y = -5;
  } else if (event.keyCode === 68 && playerTwoDirection.x !== -5) {
    playerTwoDirection.x = 5;
    playerTwoDirection.y = 0;
  } else if (event.keyCode === 65 && playerTwoDirection.x !== 5) {
    playerTwoDirection.x = -5;
    playerTwoDirection.y = 0;
  }
}
