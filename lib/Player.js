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

  movePlayerHorizontal(directionX) {
    this.x += directionX;
  }

  movePlayerVertical(directionY) {
    this.y -= directionY;
  }


  containPlayer() {
    if (this.x <= 0) {
      this.x = 0
      this.move = false;
    } else if (this.x >= 750 - this.width) {
      this.x = 750 - this.width;
      this.move = false;
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
    this.trail.unshift([this.x, this.y, this.x + this.width, this.y + this.height]);
    for (let i = 0; i < this.trail.length; i++) {
      context.fillStyle = this.color;
      context.fillRect(this.trail[i][0], this.trail[i][1], this.width, this.height)
    }
  }
}


module.exports = Player;
