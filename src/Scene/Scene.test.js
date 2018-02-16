const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const { Action } = require('../Action')

const { Position } = require('../Position')

const Scene = require('./Scene')

const SceneErrors = require('./SceneErrors')

describe('Testing the scene class', () => {
  let sceneName = 'NewScene'
  let sceneChangeName = 'NewSceneChanged'

  it(`Should let me create a scene with '${sceneName}'`, () => {
    let NewScene = new Scene(sceneName)

    NewScene.name.should.be.a('string')

    NewScene.name.should.equal(sceneName)
  });

  it(`Should le tme change the name via setName method to ${sceneChangeName}`, () => {
    let NewScene = new Scene(sceneName)

    NewScene.name.should.be.a('string')

    NewScene.name.should.equal(sceneName)

    NewScene
      .setName(sceneChangeName)

    NewScene.name.should.be.a('string')

    NewScene.name.should.equal(sceneChangeName)
  });

  it('Should not let me add anything to the positions list', () => {
    let NewScene = new Scene(sceneName)

    expect(() => { NewScene.addPosition('lalal') })
      .to
      .throw(SceneErrors.InvalidScenePositionAddedError)

  })

  it('Should not let me add an action with the same name twice', () => {
    let NewScene = new Scene(sceneName)
    let Position1 = new Position('newPosition')
    let Position2 = new Position('newPosition')
    expect(() => { NewScene.addPosition(Position1) })
      .to
      .not
      .throw()

    expect(() => { NewScene.addPosition(Position1) })
      .to
      .throw(SceneErrors.PositionNameSceneClashError)
  })

})