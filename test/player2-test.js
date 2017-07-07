var { expect } = require('chai');
var Player2 = require('../lib/Player2.js');


describe('Player2 functionality', function() {
  let player2;

  beforeEach(function() {
    player2 = new Player2 (150, 350, 20, 20, '#A32428', 3, 0)
  });

  it('Should be a function', function() {
    expect(player2).to.be.an.instanceOf(Player2);
  })

  it('Should have x, y, width, height, color, dx, dy', function() {
    expect(player2).to.deep.equal({
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

  it('Should check for collision against player1, and itself', function() {

    expect(player2.trail[0]).to.equal = [10, 10, 30, 30]
    Player2.checkPlayer2Collision();
    expect(Player2.trail[5]).to.equal = [5, 5, 25, 25]
  })

})
