require('./index.css');
const Grid = require('./Grid.js');
const Player1 = require('./Player1.js');
const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGrid = new Grid(750, 750, "#485056", 0, 0);
const newPlayer1 = new Player1 (370, 370, 20, 20, '#aa19b5');
const newPlayer2 = new Player2 (340, 340, 20, 20, 'orange');

var direction = {
  x: 1,
  y: 1,
}

function gameLoop(value) {

  if( value === true) {
    newPlayer1.move( direction );
  }

  newGrid.draw(context);
  newGrid.drawGridX(context);
  newGrid.drawGridY(context);
  newPlayer1.draw(context);
  newPlayer2.draw(context);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', moveUp);

function moveUp ( event ) {
  console.log('hi')
  if (event.keyCode == 38) {
    newPlayer1.move( direction );
    gameLoop(true);
    console.log('also hi')
  }
}
