const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const { Action } = require('../Action')

const Position = require('./Position')

const PositionErrors = require('./PositionErrors')

describe('Testing the position class', () => {
  let positionName = 'NewPosition'
  let positionChangeName = 'NewPositionChanged'

  it(`Should let me create a position with '${positionName}'`, () => {
    let NewPosition = new Position(positionName)

    NewPosition.name.should.be.a('string')

    NewPosition.name.should.equal(positionName)
  });

  it(`Should le tme change the name via setName method to ${positionChangeName}`, () => {
    let NewPosition = new Position(positionName)

    NewPosition.name.should.be.a('string')

    NewPosition.name.should.equal(positionName)

    NewPosition
      .setPositionName(positionChangeName)

    NewPosition.name.should.be.a('string')

    NewPosition.name.should.equal(positionChangeName)
  });

  it('Should not let me add anything to the actions list', () => {
    let NewPosition = new Position(positionName)

    expect(() => { NewPosition.addAction('lalal') })
      .to
      .throw(PositionErrors.InvalidActionAddedError)

  })

  it('Should not let me add an action with the same name twice', () => {
    let NewPosition = new Position(positionName)
    let Action1 = new Action('newAction')
    let Action2 = new Action('newAction')
    expect(() => { NewPosition.addAction(Action1) })
      .to
      .not
      .throw()

    expect(() => { NewPosition.addAction(Action2) })
      .to
      .throw(PositionErrors.ActionNameClashError)
  })

})