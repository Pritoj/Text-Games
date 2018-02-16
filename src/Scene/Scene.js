const {
  PositionNameSceneClashError,
  InvalidPositionAddedSceneError
} = require('./SceneErrors')

const { Position } = require('../Position')
const { WithActionList } = require('../WithActionList')
/**
 * This is the class for a scene.
 * A scene is a combination of many positions.
 * A scene may contain actions to navigate said position or to do anything basically.
 */

var positions = [];

class Scene extends WithActionList{
  constructor(name) {
    super(name)
  }

  /**
   * This adds an position to the positions list. It checks if a valid position is provided and if it doesn't clash with any existing positions
   * @param {Position} position 
   */
  addPosition(position) {
    // Check if it's a proper position
    if (!(position instanceof Position)) {
      // if it's an invalid position
      throw new InvalidPositionAddedSceneError()
    }

    // Check if we are getting a position with the same name
    if (!!this.getPosition(position.name)) {
      throw new PositionNameSceneClashError()
    }

    // Clearly it passed all the checks i could think of
    // So might as well add it to the positions list
    positions.push(position)
    return this
  }

  /**
   * Gets a specific position.
   * @param {string} positionName 
   */
  getPosition(positionName) {
    // get a position with the name `positionName`
    return positions.find((v) => v.name === positionName)
  }

  /**
   * Gets the list of all positions for this scene.
   */
  get positions() {
    // Just return all positions
    return positions
  }


}

module.exports = Scene;