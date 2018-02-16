const Action = require('./../Action')
const {
  InvalidActionAddedError,
  ActionNameClashError
} = require('./PositionErrors');

/**
 * This defines a position in the room.
 * It can be north, south east west etc. to invoke this usually we will use 
 * the activation word `move to`. This can be defined in the Room object.
 * 
 * The position gets a few actions added here and will be passed the actions from
 * all the parents i.e. Room, level and game
 */

// all actions in this Position. This will be tested first
let actions = [];

class Position {
  constructor(name) {
    this.name = name;
  }

  /**
   * Set the name for this position. This will be used later,
   * probably in the room.
   * 
   * This method is chainable.
   * @param {string} name 
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * This adds an action to the actions list. It checks if a valid action is provided and if it doesn't clash with any existing actions
   * @param {Action} action 
   */
  addAction(action) {
    // Check if it's a proper action
    if (!(action instanceof Action)) {
      // if it's an invalid action
      throw new InvalidActionAddedError();
    }

    // Check if we are getting an action with the same name
    if (!!this.getAction(action.name)) {
      throw new ActionNameClashError();
    }

    // Clearly it passed all the checks i could think of
    // So might as well add it to the actions list
    actions.push(action);
    return this;
  }

  /**
   * Gets a specific action.
   * @param {string} actionName 
   */
  getAction(actionName) {
    // get an action with the name `actionName`
    return actions.find((v) => v.name === actionName);
  }

  /**
   * Gets the list of all actions for this position.
   */
  get actions() {
    // Just return all actions
    return actions;
  }
}