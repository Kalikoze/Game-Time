class Grid {
  constructor(width, height, backgroundColor, x, y, collisionX, collisionY) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.x = x;
    this.y = y;
    this.collisionX = collisionX;
    this.collisionY = collisionY;
  }

  draw(context) {
    context.fillStyle = this.backgroundColor;
    context.fillRect(0, 0, this.width, this.height);
  }

  drawGridX(context) {
    for (var i = 0; i < 20; i++) {
      context.beginPath();
      context.moveTo(this.x += (this.width / 20), 0);
      context.lineTo(this.x, this.height);
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();

      if (this.x > this.width - (this.width / 19)) {
        this.x = 0;
      }
    }
  }

  drawGridY(context) {
    for (var i = 0; i < 20; i++) {
      context.beginPath();
      context.moveTo(0, this.y += (this.width / 20));
      context.lineTo(this.width, this.y);
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();

      if (this.y > this.height - (this.height / 19)) {
        this.y = 0;
      }
    }
  }

  checkCollision(Player1, Player2) {
    let PlayersTrails = [...Player1, ...Player2];
    console.log(PlayersTrails);
  }

}

module.exports = Grid;



// checkCollision(Player1X, Player1Y, Player2X, Player2Y) {
//
//   this.collisionX = this.collisionX.filter(function(x) {
//     return x !== Player1X;
//   })
//
//   this.collisionY = this.collisionY.filter(function(y) {
//     return y !== Player1Y;
//   })
//
//   // console.log(this.collisionX, this.collisionY);
//   // if (Player1 || Player2 === xCoordinates) {
//   //   console.log('crash')
//   // }
// }


//
// checkCollision(player1Trail, player2Trail) {
//   console.log('hello');
//   for (let i = 0; i < this.trail.length; i++) {
//     console.log('hello');
//     if ((player1Trail.x === player2Trail.x) || (player1Trail.y === player2Trail.y)) {
//       // console.log('crash')
//     }  else {
//       // console.log('no crash');
//     }
//   }
// }
