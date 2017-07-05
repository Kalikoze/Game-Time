var newPlayer1 = require('./Player1.js');
var newPlayer2 = require('./Player2.js');
var canvas = document.getElementById('tron-board');
var context = canvas.getContext('2d');

class Game {
  constructor () {
    this.over = false;
  }

  begin() {
    this.over = false;
    newPlayer1.drawPlayer(context);
    newPlayer2.drawPlayer(context);
    newPlayer1.movePlayerHorizontal();
    newPlayer2.movePlayerHorizontal();
    newPlayer1.movePlayerVertical();
    newPlayer2.movePlayerVertical();
    newPlayer1.containPlayer();
    newPlayer2.containPlayer();
    newPlayer1.drawTrail(context);
    newPlayer2.drawTrail(context);
  }

  end(gameLoop) {
    this.over = true;
    context.clearRect(0,0,canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
  }

  // function newLevel() {
  //
  // }

  reset() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

module.exports = Game;
