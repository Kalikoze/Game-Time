require('./index.css');
const Grid = require('./Grid.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGrid = new Grid(500, 500, "black", 0, 0);

function gameLoop() {
  newGrid.draw(context);
  newGrid.drawGrid(context);
  requestAnimationFrame(gameLoop);
}



requestAnimationFrame(gameLoop);
