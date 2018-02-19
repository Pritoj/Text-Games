const { NameAndDescription } = require('../NameAndDescription')
/**
 * This file is restricted for actions.
 */

const defaultResponse = (action, engine, character) => {
  console.log(`${action.name} successful`)
}

class Action extends NameAndDescription{
  constructor(name) {
    super(name)

    // set to a default response
    this.response = defaultResponse
    
    this.availability = (action, engine, character)=>(true)

    this.matches = (command) => (name === command)
  }

  /**
   * This method helps define a response to an action.
   * By default this function is passed the action, the engine and the charachter
   * @param {function} resp 
   */
  setActionResponse(resp){
    this.response = resp
      return this
  }

  /**
   * This methods verifies if this action will be available to the player.
   * It is passed the action, engine and character in that order.
   * @param {function} availability 
   */
  setAvailablity(availability){
    // set the availability to the function passed so it'll be checked
    this.availability = availability
      return this
  }

  /**
   * This must return a true value for this action to be activated
   * @param {function} predicate 
   */
  setMatcher(predicate) {
    this.matches = predicate;
    return this
  }
}

module.exports = Action
