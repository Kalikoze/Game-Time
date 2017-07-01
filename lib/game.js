require('./index.css');
const Grid = require('./Grid.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

// let xCoordinates = [];
// let yCoordinates = [];


const newGrid = new Grid(750, 750, "#485056", 0, 0);
const newPlayer1 = new Player1 (370, 340, 20, 20, '#aa19b5');
const newPlayer2 = new Player2 (340, 340, 20, 20, 'orange');


let Player1direction = {
  x: 0,
  y: 5,
}

let Player2direction = {
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
  newPlayer1.moveVertically(Player1direction.y);
  newPlayer1.moveHorizontally(Player1direction.x);
  newPlayer1.drawTrail(context);
  newPlayer2.moveVertically(Player2direction.y);
  newPlayer2.moveHorizontally(Player2direction.x);
  newPlayer2.drawTrail(context);
  // newGrid.checkCollision(newPlayer1.x, newPlayer1.y, newPlayer2.x, newPlayer2.y);
  newGrid.checkCollision(newPlayer1.trail, newPlayer2.trail);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function movePlayer1 (event) {
  if (event.keyCode === 38 && Player1direction.y !== -5) {
    Player1direction.x = 0;
    Player1direction.y = 5;
  } else if (event.keyCode === 40 && Player1direction.y !== 5) {
    Player1direction.x = 0;
    Player1direction.y = -5;
  } else if (event.keyCode === 39 && Player1direction.x !== -5) {
    Player1direction.x = 5;
    Player1direction.y = 0;
  } else if (event.keyCode === 37 && Player1direction.x !== 5) {
    Player1direction.x = -5;
    Player1direction.y = 0;
  }
}

function movePlayer2 (event) {
  if (event.keyCode === 87 && Player2direction.y !== -5) {
    Player2direction.x = 0;
    Player2direction.y = 5;
  } else if (event.keyCode === 83 && Player2direction.y !== 5) {
    Player2direction.x = 0;
    Player2direction.y = -5;
  } else if (event.keyCode === 68 && Player2direction.x !== -5) {
    Player2direction.x = 5;
    Player2direction.y = 0;
  } else if (event.keyCode === 65 && Player2direction.x !== 5) {
    Player2direction.x = -5;
    Player2direction.y = 0;
  }
}

//
// for (var i = 0; i <= 150; i++) {
//   xCoordinates.push(5 * i);
//   yCoordinates.push(5 * i);
// }
