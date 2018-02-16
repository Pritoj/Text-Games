const {
  InvalidTypeAddedError,
  ObjectDuplication
} = require('./ObjectListErrors')

/**
 * This is a class of lists
 * It maintains our lists
 */

class ObjectList {
  constructor(objectType, noDuplicatesOn = false){
    this.list = new Array();
    this.objectType = objectType
    this.duplicatesKey = noDuplicatesOn
  }

  /**
   * This adds an objectType to the objectType list. It checks if a valid objectType is provided and if it doesn't clash with any existing objects
   * @param {any} obj 
   */
  push(obj) {
    // Check if it's a proper action
    if (!(obj instanceof this.objectType)) {
      // if it's an invalid action
      throw new InvalidTypeAddedError(this.objectType.name)
    }
    
    // Check if we are getting an action with the same name
    if(this.duplicatesKey && obj[this.duplicatesKey]){
      let dupVal = this.list.find((v)=>{
        return v[this.duplicatesKey] === obj[this.duplicatesKey]
      })
      if(!!dupVal){
        throw new ObjectDuplication(this.objectType.name, this.duplicatesKey)
      }
    }

    // Clearly it passed all the checks i could think of
    // So might as well add it to the list
    this.list.push(obj)
    return this
  }
}

module.exports = ObjectList