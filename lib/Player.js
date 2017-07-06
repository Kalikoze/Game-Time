class Player {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.trail = [];
    this.move = true;
    this.crash = false;
  }


  drawPlayer(context) {
    let {x, y, width, height, color} = this;

    context.fillStyle = color;
    context.fillRect(x, y, width, height);
  }

  movePlayerHorizontal(directionX) {
    this.x += directionX;
  }

  movePlayerVertical(directionY) {
    this.y -= directionY;
  }


  containPlayer() {
    let {x, y, width, height} = this;

    if (x <= 0) {
      x = 0
      this.move = false;
      this.crash = true;
    } else if (x >= 750 - width) {
      x = 750 - width;
      this.move = false;
      this.crash = true;
    }

    if (y <= 0) {
      y = 0
      this.move = false;
      this.crash = true;
    } else if (y >= 750 - height) {
      y = 750 - height;
      this.move = false;
      this.crash = true;
    }
  }

  drawTrail(context) {
    let {x, y, width, height, color, trail} = this;

    trail.unshift([x, y, x + width, y + height]);
    for (let i = 0; i < trail.length; i++) {
      context.fillStyle = color;
      context.fillRect(trail[i][0], trail[i][1], width, height)
    }
  }
}


module.exports = Player;
