const Grid = require('./Grid.js');
// const Player1 = require('./Player1.js');
// const Player2 = require('./Player2.js');

const canvas = document.getElementById('tron-board');
const context = canvas.getContext('2d');

const newGrid = new Grid(750, 750, "#161819", 0, 0);
// const newPlayer1 = new Player1 (150, 350, 20, 20, '#A32428', this.dx, 0);
// const newPlayer2 = new Player2 (600, 400, 20, 20, '#1B7AA2', -this.dx, 0);

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
