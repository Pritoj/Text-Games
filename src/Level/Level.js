const { Action } = require('../Action')
const { Scene } = require('../Scene')
const { NameAndDescription } = require('../NameAndDescription');


/**
 * This is the class for a level.
 * A level is a combination of many scenes.
 * A level may contain actions to navigate said scene or to do anything basically.
 */

class Level extends NameAndDescription{
  constructor(name) {
    super(name)
    this.actions = new ObjectList(Action, 'name')
    this.scenes = new ObjectList(Scene, 'name')
  }
}

module.exports = Level;