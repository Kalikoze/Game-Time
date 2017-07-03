var Player = require('./Player.js');

class Player2 extends Player {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }

  checkPlayer2Collision(Player1) {
    let Player2position = JSON.stringify(this.trail[0]);

    //Checks for crashing into Player1
    for (var i = 0; i < Player1.trail.length; i++) {
      let Player1Trail = JSON.stringify(Player1.trail[i]);

      if (Player2position === Player1Trail) {
        console.log('Player1 Wins');
      }
    }

    //Checks for crashing into itself
    for (var i = 1; i < this.trail.length; i++) {
      let Player2Trail = JSON.stringify(this.trail[i]);

      if (Player2position === Player2Trail) {
        console.log('Player2 Hits Himself');
      }
    }
  }
}


module.exports = Player2;
