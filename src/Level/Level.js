const { WithActionList } = require('../WithActionList')

const {
  SceneNameLevelClashError,
  InvalidSceneAddedLevelError
} = require('./LevelErrors')

const { Action } = require('../Action')
const { Scene } = require('../Scene')
/**
 * This is the class for a level.
 * A level is a combination of many scenes.
 * A level may contain actions to navigate said scene or to do anything basically.
 */

var scenes = [];

class Level extends WithActionList{
  constructor(name) {
    super(name)
  }

  /**
   * This adds an scene to the scenes list. It checks if a valid scene is provided and if it doesn't clash with any existing scenes
   * @param {Scene} scene 
   */
  addScene(scene) {
    // Check if it's a proper scene
    if (!(scene instanceof Scene)) {
      // if it's an invalid scene
      throw new InvalidSceneAddedLevelError()
    }

    // Check if we are getting a scene with the same name
    if (!!this.getScene(scene.name)) {
      throw new SceneNameLevelClashError()
    }

    // Clearly it passed all the checks i could think of
    // So might as well add it to the scenes list
    scenes.push(scene)
    return this
  }

  /**
   * Gets a specific scene.
   * @param {string} sceneName 
   */
  getScene(sceneName) {
    // get a scene with the name `sceneName`
    return scenes.find((v) => v.name === sceneName)
  }

  /**
   * Gets the list of all scenes for this level.
   */
  get scenes() {
    // Just return all scenes
    return scenes
  }


}

module.exports = Level;