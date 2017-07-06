var { expect, assert } = require('chai');
var Player = require('../lib/Player.js');
var Player1 = require('../lib/Player1.js');
var Player2 = require('../lib/Player2.js');
// var game = require('../lib/game.js');



describe('animation', function() {
  let newPlayer1 = new Player(150, 350, 20, 20, '#A32428', 3, 0)

  it('should cancel animation frame when either players move property is false', function() {
    expect(newPlayer1.move).to.equal(true);
    assert.isFunction(animation);
    expect(newPlayer1.move).to.equal(false);
  })
})
