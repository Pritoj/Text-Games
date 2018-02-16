/**
 * This class is when we try to add something other than an Action
 */
class InvalidTypeAddedError extends Error {
  constructor(className){
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = `Invalid ${className} Added to ActionList`
    this.message = `You are trying to add an invalid ${className}`;
  }
}

/**
 * This class is when we are trying to add an action which clashes with one that already exists
 */
class ObjectDuplication extends Error {
  constructor(className,key){
    super()
    Error.captureStackTrace(this, this.constructor)
    this.name = `Action Name Clash in ${className} list`
    this.message = `You are trying to add an object of ${className} with the same ${key} as another in this position`;
  }
}

module.exports = {
  InvalidTypeAddedError,
  ObjectDuplication
}