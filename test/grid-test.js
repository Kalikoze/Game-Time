
var { expect, assert } = require('chai');
var Grid = require('../lib/Grid.js')
// var game = require('../lib/game.js')

describe('Grid functionality', function() {

  let grid;
  // let context;

  beforeEach(function () {
    grid = new Grid (750, 750, "#161819", 0, 0);
  });

  it('Should be a function', function () {
    expect(grid).to.be.an.instanceOf(Grid);
  });

  it('Should have width, height, color, x, y', function () {
    expect(grid).to.deep.equal({
      width: 750,
      height: 750,
      backgroundColor: "#161819",
      x: 0,
      y: 0,
    });
  })

  it('Should have a draw function', function () {
    assert.isFunction(grid.draw);
    expect(grid).to.have.property('draw');
  });

  it.skip('grid.draw should fill the background of the grid', function ( ) {
    let backgroundColor = {backgroundColor: "#161819"};

    expect(grid.backgroundColor).to.equal("#161819");
    grid.draw(backgroundColor);
    expect(grid.backgroundColor).to.equal("#161819");
  });

  it('Should have a drawXLines function', function () {
    assert.isFunction(grid.drawXLines);
    expect(grid).to.have.property('drawXLines');
  });

  it('Should have a drawYLines function', function () {
    assert.isFunction(grid.drawYLines);
    expect(grid).to.have.property('drawYLines');
  });

  it('Should have a drawGridLines function', function () {
    assert.isFunction(grid.drawGridLines);
    expect(grid).to.have.property('drawGridLines');
  });



});
