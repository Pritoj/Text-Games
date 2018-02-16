const { Action } = require('../Action')
const {
  InvalidWithActionListActionAddedError,
  ActionNameWithActionListClashError
} = require('./WithActionListErrors')

/**
 * This defines a withActionList.
 * It can be north, south east west etc. to invoke this usually we will use 
 * the activation word `move to`. This can be defined in the Room object.
 * 
 * It will be extended by all other objects
 */

// all actions in this WithActionList. This will be tested first
let actions = []

class WithActionList {
  constructor(name) {
    this.name = name

    this.description = `Random room description`
  }

  /**
   * Set the name for this withActionList. This will be used later,
   * probably in the room.
   * 
   * This method is chainable.
   * @param {string} name 
   */
  setName(name) {
    this.name = name
    return this
  }

  /**
   * This is a description of this withActionList. It will be used to oriend the player.
   * @param {string} desc 
   */
  setDescription(desc) {
    this.description = desc;
  }

  /**
   * This adds an action to the actions list. It checks if a valid action is provided and if it doesn't clash with any existing actions
   * @param {Action} action 
   */
  addAction(action) {
    // Check if it's a proper action
    if (!(action instanceof Action)) {
      // if it's an invalid action
      throw new InvalidWithActionListActionAddedError()
    }

    // Check if we are getting an action with the same name
    if (!!this.getAction(action.name)) {
      throw new ActionNameWithActionListClashError()
    }

    // Clearly it passed all the checks i could think of
    // So might as well add it to the actions list
    actions.push(action)
    return this
  }

  /**
   * Gets a specific action.
   * @param {string} actionName 
   */
  getAction(actionName) {
    // get an action with the name `actionName`
    return actions.find((v) => v.name === actionName)
  }

  /**
   * Gets the list of all actions for this withActionList.
   */
  get actions() {
    // Just return all actions
    return actions
  }
}

module.exports = WithActionList;