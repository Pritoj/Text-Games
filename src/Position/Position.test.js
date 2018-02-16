const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const { Action } = require('../Action')

const Position = require('./Position')

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
      .setName(positionChangeName)

    NewPosition.name.should.be.a('string')

    NewPosition.name.should.equal(positionChangeName)
  });

})