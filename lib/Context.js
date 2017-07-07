class Context {
  constructor(x, y, width, height, color, font) {
    this.canvas = document.getContext('2d');
    this.x = x;
    this.y = y;
    this.fillStyle = color;
    this.font = font;
    this.textBaseline = 'bottom';
    this.lineWidth = .5;
    this.strokeStyle = "#4eb8c0";
  }

  fillRect(x, y, width, height) {
    this.width = width;
    this.height = height;
  }

  fillText(string, x, y) {
    this.string = string;
    this.y = y;
  }

  moveTo(x, y) {
    this.x = this.x += (this.width / 20);
    this.y = this.y += (this.width / 20);
  }

  lineTo(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  beginPath() {
    
  }

  stroke() {

  }

  closePath() {

  }
}



module.exports = Context;
