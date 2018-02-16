const { NameAndDescription } = require('../NameAndDescription');

const { Position } = require('../Position')
const { Action } = require('../Action')
/**
 * This is the class for a scene.
 * A scene is a combination of many positions.
 * A scene may contain actions to navigate said position or to do anything basically.
 */

var positions = [];

class Scene extends NameAndDescription {
  constructor(name) {
    super(name)
    this.actions = new ObjectList(Action, 'name')
    this.positions = new ObjectList(Position, 'name')
  }
}

module.exports = Scene;