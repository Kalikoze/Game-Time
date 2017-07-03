var Player = require('./Player.js');

class Player1 extends Player {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  checkPlayer1Collision(Player2) {
    let Player1position = JSON.stringify(this.trail[0]);

    //Checks for crashing into Player2
    for (var i = 0; i < Player2.trail.length; i++) {
      let Player2Trail = JSON.stringify(Player2.trail[i]);

      if (Player1position === Player2Trail) {
        console.log('Player2 Wins');
      }
    }

    //Checks for crashing into itself
    for (var i = 1; i < this.trail.length; i++) {
      let Player1Trail = JSON.stringify(this.trail[i]);

      if (Player1position === Player1Trail) {
        console.log('Player1 Hits Himself');
      }
    }
  }
}


module.exports = Player1;
