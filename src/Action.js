/**
 * This file is restricted for actions.
 */

const defaultResponse = (action, engine, character) => {
  console.log(`${action.name} successful`);
}

class Action {
  constructor(name) {
    // assign name to this action
    this.name = name;
    
    // set a default description, hopefully will be added later
    this.description = `This action is the ${name} action. Much amaze`;
    // set to a default response
    this.response = defaultResponse;
    
    this.availability = (action, engine, character)=>(true);
  }
  
 /**
  * This method sets the name of the action.
  * This metod is chainable so it returns this object.
  * @param {string} name 
  */
  setActionName(name){
    this.name = name;
    return this;
  }

  /**
   * This sets the action description.
   * @param {string} desc 
   */
  setActionDescription(desc){
    this.description = desc;
  }

  /**
   * This method helps define a response to an action.
   * By default this function is passed the action, the engine and the charachter
   * @param {function} resp 
   */
  setActionResponse(resp){
    this.response = resp;
  }

  /**
   * This methods verifies if this action will be available to the player.
   * It is passed the action, engine and character in that order.
   * @param {function} availability 
   */
  setAvailablity(availability){
    // set the availability to the function passed so it'll be checked
    this.availability = availability;
  }
}

module.exports = Action;