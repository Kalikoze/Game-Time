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


}

module.exports = Grid;
