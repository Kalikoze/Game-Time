class Grid {
  constructor(width, height, backgroundColor, x, y) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.x = x;
    this.y = y;
  }
  draw(context) {
    context.fillStyle = this.backgroundColor;
    context.fillRect(0, 0, this.width, this.height);
  }

  drawGrid(context) {
    for(var i = 0; i < 50; i++) {

      this.x += 25;
      context.beginPath();
      context.moveTo(this.x, 0);
      context.lineTo(this.x, this.width);
      context.lineWidth = 10;
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();

      if (this.x === this.width - 10) {
        this.x -= 25;
        console.log('hello')
      }
    }

  }
};

module.exports = Grid;
