class Grid {
  constructor(width, height, backgroundColor, x, y) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.x = x;
    this.y = y;
  }

  draw(context) {
    let {width, height, backgroundColor} = this;

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);
  }

  drawXLines(context) {
    context.moveTo(this.x += (this.width / 20), 0);
    context.lineTo(this.x, this.height);

    if (this.x > this.width - (this.width / 20)) {
      this.x = 0;
    }
  }

  drawYLines(context) {
    context.moveTo(0, this.y += (this.width / 20));
    context.lineTo(this.width, this.y);

    if (this.y > this.height - (this.height / 20)) {
      this.y = 0;
    }
  }

  drawGridLines(context) {
    for (var i = 0; i < 20; i++) {
      context.beginPath();
      this.drawXLines(context);
      this.drawYLines(context);
      context.lineWidth = .5;
      context.strokeStyle = "#4eb8c0";
      context.stroke();
      context.closePath();
    }
  }
}

module.exports = Grid;
