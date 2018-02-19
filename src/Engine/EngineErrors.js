class NoPositionFound extends Error {
  constructor(){
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = `No Position Found`
    this.message = `There is no position here, this is an empty shell of a game`;
  }
}

class NoSceneFound extends Error {
  constructor(){
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = `No Scene Found`
    this.message = `There is no secne here, this is an empty shell of a game`;
  }
}

class NoLevelFound extends Error {
  constructor(){
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = `No Level Found`
    this.message = `There is no level here, this is an empty shell of a game`;
  }
}

module.exports = {
  NoPositionFound,
  NoSceneFound,
  NoLevelFound
}