const Grid = require('./Grid.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGrid = new Grid(750, 750, "#161819", 0, 0);

class Game {
  constructor (dx, dy, startNextGame) {
    this.dx = dx;
    this.dy = dy;
    this.startNextGame = startNextGame
  }

  drawGrid() {
    this.startNextGame = false;
    newGrid.draw(context);
    newGrid.drawGridLines(context);
  }

  levelUp() {
    let playerOneScore = parseInt(document.querySelector('.player-one-score').textContent);
    let playerTwoScore = parseInt(document.querySelector('.player-two-score').textContent);
    let levelNumber = parseInt(document.querySelector('.level-number').textContent);

    if (playerOneScore >= 3 || playerTwoScore >= 3) {

      document.querySelector('.level-number').textContent = levelNumber + 1;
      document.querySelector('.player-one-score').textContent = 0;
      document.querySelector('.player-two-score').textContent = 0;
      this.speedUp();
    }
  }

  speedUp () {
    this.dx += 2;
    this.dy += 2;
  }
}

module.exports = Game;
