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

<<<<<<< HEAD
  drawGrid(context) {
    for(var i = 0; i < 25; i++) {

      context.beginPath();
      context.moveTo(this.x += 20, 0);
      context.lineTo(this.x, this.width);
=======
  drawGridX(context) {
    for (var i = 0; i < 10; i++) {
      context.beginPath();
      context.moveTo(this.x += (this.width / 10), 0);
      context.lineTo(this.x, this.height);
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();

      if (this.x > this.width - (this.width / 9)) {
        this.x = 0;
      }
    }
  }

  drawGridY(context) {
    for (var i = 0; i < 10; i++) {
      context.beginPath();
      context.moveTo(0, this.y += (this.width / 10));
      context.lineTo(this.width, this.y);
>>>>>>> 395ac81077c8479b020920b6946346f619f80f88
      context.lineWidth = 3;
      context.strokeStyle = "white";
      context.stroke();
      context.closePath();

<<<<<<< HEAD
      if (this.x === this.width) {
        this.x = 0;
=======
      if (this.y > this.height - (this.height / 9)) {
        this.y = 0;
>>>>>>> 395ac81077c8479b020920b6946346f619f80f88
        console.log('hello')
      }
    }
  }


}

module.exports = Grid;
