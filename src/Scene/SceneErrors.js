class PositionNameSceneClashError extends Error {
  constructor(...args){
    super(...args)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'Action Name Clash in Scene'
    this.message = 'You are trying to add an action with the same name as another in this scene';
  }
}

class InvalidPositionAddedSceneError extends Error {
  constructor(...args){
    super(...args)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'Invalid Action Added to Scene'
    this.message = 'You are trying to add an invalid action to this scene';
  }
}



module.exports = {
  PositionNameSceneClashError,
  InvalidPositionAddedSceneError
}