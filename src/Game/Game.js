const {NameAndDescription} = require('../NameAndDescription')
const {ObjectList} = require('../ObjectList')
const {Action} = require('../Action')
const {Character} = require('../Character')
const {Level} = require('../Level')

class Game extends NameAndDescription {
    constructor(name) {
        super(name)
        this.actions = new ObjectList(Action, 'name')
        this.characters = new ObjectList(Character, 'name')
        this.levels = new ObjectList(Level, 'name')
        this.state = null
    }

    addAction(action) {
        this.actions.list.push(action)
        return this
    }

    addCharacter(character) {
        this.characters.list.push(character)
        return this
    }

    /**
     * Saved when a game is saved
     * @param state
     * @returns {Game}
     */
    setState(state) {
        this.state = state
        return this
    }
}

module.exports = Game