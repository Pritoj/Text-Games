const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const {Scene} = require('../Scene')

const Level = require('./Level')

const LevelErrors = require('./LevelErrors')

describe('Testing the level class', () => {
  let levelName = 'NewLevel'
  let levelChangeName = 'NewLevelChanged'

  it(`Should let me create a level with '${levelName}'`, () => {
    let NewLevel = new Level(levelName)

    NewLevel.name.should.be.a('string')

    NewLevel.name.should.equal(levelName)
  });

  it(`Should le tme change the name via setName method to ${levelChangeName}`, () => {
    let NewLevel = new Level(levelName)

    NewLevel.name.should.be.a('string')

    NewLevel.name.should.equal(levelName)

    NewLevel
      .setName(levelChangeName)

    NewLevel.name.should.be.a('string')

    NewLevel.name.should.equal(levelChangeName)
  });

  it('Should not let me add anything to the scenes list', () => {
    let NewLevel = new Level(levelName)

    expect(() => { NewLevel.addScene('lalal') })
      .to
      .throw(LevelErrors.InvalidLevelSceneAddedError)

  })

  it('Should not let me add an action with the same name twice', () => {
    let NewLevel = new Level(levelName)
    let Scene1 = new Scene('newScene')
    let Scene2 = new Scene('newScene')
    expect(() => { NewLevel.addScene(Scene1) })
      .to
      .not
      .throw()

    expect(() => { NewLevel.addScene(Scene1) })
      .to
      .throw(LevelErrors.SceneNameLevelClashError)
  })

})