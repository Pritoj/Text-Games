/**
 * This class is when we try to add something other than an Action
 */
class InvalidActionAddedError extends Error {
  constructor(...args){
    super(...args)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'Invalid Action Added'
    this.message = 'You are trying to add an ainvalid action';
  }
}

/**
 * This class is when we are trying to add an action which clashes with one that already exists
 */
class ActionNameClashError extends Error {
  constructor(...args){
    super(...args)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'Action Name Clash'
    this.message = 'You are trying to add an action with the same name as another in this position';
  }
}

module.exports = {
  InvalidActionAddedError,
  ActionNameClashError
}