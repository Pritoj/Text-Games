const { NameAndDescription } = require('../NameAndDescription')
const { ObjectList } = require('../ObjectList')
const { Action } = require('../Action')
const { Character } = require('../Character')
const { Level } = require('../Level')

class Game extends NameAndDescription{
  constructor(name){
    super(name)
    this.actions = new ObjectList(Action, 'name')
    this.characters = new ObjectList(Character, 'name')
    this.levels = new ObjectList(Level, 'name')
  }

  addAction(action) {
    this.actions.list.push(action)
    return this
  }

  addCharacter(character) {
    this.characters.list.push(character)
    return this
  }
}

module.exports = Game