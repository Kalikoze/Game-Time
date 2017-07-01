class Player {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.trail = [];
    this.move = true;
  }

  drawPlayer(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  // // moveVertically(directionY) {
  // //   if (this.y > 0 || this.y < 750) {
  // //     this.move = true;
  // //     this.y -= directionY;
  // //   } else {
  // //     this.move = false;
  // //   }
  // // }
  // //
  // moveHorizontally(directionX) {
  // //   // if (this.x >= 0 || this.x <= 750) {
  // //   //   this.move = true;
  // //   //   this.x += directionX;
  // //   //   console.log(this.move);
  // //   // } else {
  // //   //   this.move = false;
  // //   //   this.x = 0;
  // //   // }
  // }

  movePlayerHorizontal(directionX) {
    this.x += directionX;
    console.log(this.move)
  }

  movePlayerVertical(directionY) {
    this.y += directionY;
  }

  containPlayer() {
    if (this.x <= 0) {
      this.x = 0
      this.move = false;
    } else if (this.x >= 750 - this.width) {
      this.x = 750 - this.width;
      this.move = false;
      console.log(this.move)
    }

    if (this.y <= 0) {
      this.y = 0
      this.move = false;
    } else if (this.y >= 750 - this.height) {
      this.y = 750 - this.height;
      this.move = false;
    }
  }

  drawTrail(context) {
    this.trail.push({x: this.x, y: this.y});
    for (let i = 0; i < this.trail.length; i++) {
      context.fillStyle = this.color;
      context.fillRect(this.trail[i].x, this.trail[i].y, this.width, this.height)
    }
  }
  //
  // stopPlayer() {
  //   if (this.move = false) {
  //     this.y =
  //   }
  //   }

}


module.exports = Player;
