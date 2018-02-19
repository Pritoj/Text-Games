const { NameAndDescription } = require('../NameAndDescription')
const { ObjectList } = require('../ObjectList')
const { Action } = require('../ObjectList')

const CharacterAttribute = require('./CharacterAttribute')
const InventoryItem = require('./InventoryItem')
/**
 * This is the character class. The player will ideally play
 * as one character. The character also has certain attributes and certain actions.
 */

class Character extends NameAndDescription {
  constructor(name) {
    super(name)
    this.attributes = new ObjectList(CharacterAttribute,'key')
    this.actions = new ObjectList(Action, 'name')
    this.inventory = new ObjectList(InventoryItem, 'key')

    this.addAttribute = this.addAttribute.bind(this)
  }

  addAttribute(attr) {
    this.attributes.list.push(attr)
    return this
  }

  addInventoryItem(InventoryItem){
    this.inventory.list.push(InventoryItem)
    return this
  }

}

module.exports = Character