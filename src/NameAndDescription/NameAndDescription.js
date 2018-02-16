class NameAndDescription {
  constructor(name) {
    this.name = name

    this.description = `Random ${name} description`
  }

  /**
   * Set the name for this class object. This will be used later,
   * 
   * This method is chainable.
   * @param {string} name 
   */
  setName(name) {
    this.name = name
    return this
  }

  /**
   * This is a description of this actionList. It will be used to oriend the player.
   * @param {string} desc 
   */
  setDescription(desc) {
    this.description = desc
    return this
  }
}

module.exports = NameAndDescription;