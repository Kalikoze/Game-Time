var { expect, assert } = require('chai');
var Player = require('../lib/Player.js');

describe('Player functionality', function() {

  let player;

  beforeEach(function () {
    player = new Player (150, 350, 20, 20, '#A32428', 3, 0);
  });

  it('Should be a function', function () {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('Should have width, height, color, x, y', function () {
    expect(player).to.deep.equal({
      x: 150,
      y: 350,
      width: 20,
      height: 20,
      color: "#A32428",
      trail: [],
      move: true,
      crash: false,
      wins: 0,
      roundsWon: 0,
    });
  })

  it('Should move horizontally', function() {
    expect(player.x).to.equal = 150;
    player.movePlayerHorizontal(3);
    expect(player.x).to.equal = 153;
  })

  it('Should move vertically', function() {
    expect(player.y).to.equal = 350;
    player.movePlayerHorizontal(3);
    expect(player.y).to.equal = 353;
  })

  it('Should crash if x hits a wall', function() {
    expect(player.x).to.equal = 800;
    player.containPlayer();
    expect(player.move).to.equal = false;
    expect(player.crash).to.equal = true;
  })

  it('Should crash if y hits a wall', function() {
    expect(player.y).to.equal = -10;
    player.containPlayer();
    expect(player.move).to.equal = false;
    expect(player.crash).to.equal = true;
  })

  it('Should add coordinates to beginning of trail array', function() {
    expect(player.trail).to.equal = [];
    player.drawTrail();
    expect(player.trail).to.equal = [[10, 10, 30, 30]];
  })
});
