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
    let {width, height, backgroundColor} = this;

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);
  }

  drawXLines(context) {
    context.beginPath();
    context.moveTo(this.x += (this.width / 20), 0);
    context.lineTo(this.x, this.height);
    context.lineWidth = .5;
    context.strokeStyle = "#4eb8c0";
    context.stroke();
    context.closePath();

    if (this.x > this.width - (this.width / 19)) {
      this.x = 0;
    }
  }

  drawYLines(context) {
    context.beginPath();
    context.moveTo(0, this.y += (this.width / 20));
    context.lineTo(this.width, this.y);
    context.lineWidth = .5;
    context.strokeStyle = "#4eb8c0";
    context.stroke();
    context.closePath();

    if (this.y > this.height - (this.height / 19)) {
      this.y = 0;
    }
  }

  drawGridLines(context) {
    for (var i = 0; i < 20; i++) {
      this.drawXLines(context);
      this.drawYLines(context);
    }
  }
}

module.exports = Grid;
