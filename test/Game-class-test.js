var { expect } = require('chai');
var Game = require('../lib/Game-class.js');

describe('Game functionality', function() {

  let game;

  beforeEach(function () {
    game = new Game (3, 3, true);
  });

  it('Should be a function', function () {
    expect(game).to.be.an.instanceOf(game);
  });

  it('Should have width, height, color, x, y', function () {
    expect(game).to.deep.equal({
      dx: 3,
      dy: 3,
      startNextGame: true
    });
  })
})
