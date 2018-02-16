const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const { Action } = require('../Action')

const WithActionList = require('./WithActionList')

const WithActionListErrors = require('./WithActionListErrors')

describe('Testing the position class', () => {
  let positionName = 'NewWithActionList'
  let positionChangeName = 'NewWithActionListChanged'

  it(`Should let me create a position with '${positionName}'`, () => {
    let NewWithActionList = new WithActionList(positionName)

    NewWithActionList.name.should.be.a('string')

    NewWithActionList.name.should.equal(positionName)
  });

  it(`Should le tme change the name via setName method to ${positionChangeName}`, () => {
    let NewWithActionList = new WithActionList(positionName)

    NewWithActionList.name.should.be.a('string')

    NewWithActionList.name.should.equal(positionName)

    NewWithActionList
      .setName(positionChangeName)

    NewWithActionList.name.should.be.a('string')

    NewWithActionList.name.should.equal(positionChangeName)
  });

  it('Should not let me add anything to the actions list', () => {
    let NewWithActionList = new WithActionList(positionName)

    expect(() => { NewWithActionList.addAction('lalal') })
      .to
      .throw(WithActionListErrors.InvalidWithActionListActionAddedError)

  })

  it('Should not let me add an action with the same name twice', () => {
    let NewWithActionList = new WithActionList(positionName)
    let Action1 = new Action('newAction')
    let Action2 = new Action('newAction')
    expect(() => { NewWithActionList.addAction(Action1) })
      .to
      .not
      .throw()

    expect(() => { NewWithActionList.addAction(Action2) })
      .to
      .throw(WithActionListErrors.ActionNameWithActionListClashError)
  })

})