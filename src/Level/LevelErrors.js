class LevelNameLevelClashError extends Error {
  constructor(...args){
    super(...args)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'Action Name Clash in Level'
    this.message = 'You are trying to add an action with the same name as another in this level';
  }
}

class InvalidLevelAddedLevelError extends Error {
  constructor(...args){
    super(...args)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'Invalid Action Added to Level'
    this.message = 'You are trying to add an invalid action to this level';
  }
}



module.exports = {
  LevelNameLevelClashError,
  InvalidLevelAddedLevelError
}