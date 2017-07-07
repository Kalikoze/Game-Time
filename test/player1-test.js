var { expect } = require('chai');
var Player1 = require('../lib/Player1.js');


describe('Player1 functionality', function() {
  let player1;

  beforeEach(function() {
    player1 = new Player1 (150, 350, 20, 20, '#A32428', 3, 0)
  });

  it('Should be a function', function() {
    expect(player1).to.be.an.instanceOf(Player1);
  })

  it('Should have x, y, width, height, color, dx, dy', function() {
    expect(player1).to.deep.equal({
      x: 150,
      y: 350,
      width: 20,
      height: 20,
      color: '#A32428',
      dx: 3,
      dy: 0,
      crash: false,
      move: true,
      roundsWon: 0,
      wins: 0,
      trail: []
    })
  })

  it('Should check for collision against player2, and itself', function() {

    expect(Player1.trail[0]).to.equal = [10, 10, 30, 30]
    player1.checkPlayer1Collision();
    expect(Player1.trail[5]).to.equal = [5, 5, 25, 25]
  })

})
