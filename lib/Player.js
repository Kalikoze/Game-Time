class Player {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.trail = [];
  }

  drawPlayer(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  moveVertically(directionY) {
    this.y -= directionY;
  }

  moveHorizontally(directionX) {
    this.x += directionX;
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
