const Action =require('./../Action')
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
  constructor(name){
    this.name = name;
  }

  setName(name){
    this.name = name;
    return this;
  }

  addAction(action){
    // Check if it's a proper action
    if(!(action instanceof Action)){
      // if it's an invalid action
      throw new InvalidActionAddedError();
    }

    // Check if we are getting an action with the same name
    if(!!this.getAction(action.name)){
      throw new ActionNameClashError();
    }

    // Clearly it passed all the checks i could think of
    // So might as well add it to the actions list
    actions.push(action);
    return this;
  }

  getAction(actionName){
    // get an action with the name `actionName`
    return actions.find((v)=>v.name === actionName);
  }

  get actions(){
    // Just return all actions
    return actions;
  }
}