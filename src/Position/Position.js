const { NameAndDescription } = require('../NameAndDescription')
const { Action } = require('../Action')
const { ObjectList } = require('../ObjectList')
/**
 * This defines a position in the room.
 * It can be north, south east west etc. to invoke this usually we will use 
 * the activation word `move to`. This can be defined in the Room object.
 * 
 * The position gets a few actions added here and will be passed the actions from
 * all the parents i.e. Room, level and game
 */

class Position extends NameAndDescription{
  constructor(name) {
    super(name)
    this.actions = new ObjectList(Action,'name')
  }
}

module.exports = Position;