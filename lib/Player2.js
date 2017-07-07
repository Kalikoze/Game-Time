var Player = require('./Player.js');

class Player2 extends Player {
  constructor(x, y, width, height, color, dx, dy) {
    super(x, y, width, height, color);
    this.dx = dx;
    this.dy = dy;
  }

  checkPlayer2Collision(Player1) {
    let {width, height, trail} = this;
    let Player2Position = trail[0];

    for (var i = 0; i < Player1.trail.length; i++) {
      let Player1Trail = Player1.trail[i];

      if (Player2Position[2] < Player1Trail[0] ||
      Player2Position[0] > Player1Trail[2] ||
      Player2Position[3] < Player1Trail[1] ||
      Player2Position[1] > Player1Trail[3]) {
        this.move;
      } else {
        this.move = false;
        this.crash = true;
      }
    }

    for (var j = width + height; j < trail.length; j++) {
      let Player2Trail = this.trail[j];

      if (Player2Position[2] < Player2Trail[0] ||
      Player2Position[0] > Player2Trail[2] ||
      Player2Position[3] < Player2Trail[1] ||
      Player2Position[1] > Player2Trail[3]) {
        this.move;
      } else {
        this.move = false;
        this.crash = true;
      }
    }
  }
}

module.exports = Player2;
