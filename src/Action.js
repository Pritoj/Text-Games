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
    // set to a default response
    this.response = defaultResponse;
    this.availability = (action, engine, character)=>(true);
  }
  
  /**
   * This method sets the name of the action.
   * THis metod is chainable so it returns this object.
   */
  setActionName(name){
    this.name = name;
    return this;
  }

  /**
   * This method helps define a response to an action.
   * By default this function is passed the action, the engine and the charachter
   */
  setActionResponse(resp){
    this.response = resp;
  }

  // This is used to check if this action is available
  // at this juncture.
  setAvailablity(availability){
    // set the availability to the function passed so it'll be checked
    this.availability = availability;
  }
}

module.exports = Action;