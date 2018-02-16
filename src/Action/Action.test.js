const chai = require('chai')
const should = chai.should()
const spies = require('chai-spies')

chai.use(spies)

const Action = require('./Action')

describe('Check if we can create an action with this name', () => {
  let testActionName = 'NewAction'
  let testActionChangedName = 'ChnagedActionName'

  it(`Should have ${testActionName} as it's name`, () => {
    let NewAction = new Action(testActionName)
    NewAction.name.should.be.a('string')
    NewAction.name.should.equal(testActionName)
  })

  it(`Should le tme change the name via setName method to ${testActionChangedName}`, () => {
    let NewAction = new Action(testActionName)
    NewAction.name.should.be.a('string')

    NewAction.name.should.equal(testActionName)

    NewAction
      .setActionName(testActionChangedName)

    NewAction.name.should.be.a('string')

    NewAction.name.should.equal(testActionChangedName)
  });

  it(`Should let me add a response function and use it`, () => {
    const chaiSpy = chai.spy((action) => { })
    let NewAction = new Action(testActionName)

    NewAction
      .setActionResponse(chaiSpy)

    NewAction.response(NewAction)

    chaiSpy.should.have.been.called.with(NewAction)
  })

  it(`Should let me add an availability function and use it`, () => {
    const chaiSpy = chai.spy((action) => { })
    let NewAction = new Action(testActionName)

    NewAction
      .setAvailablity(chaiSpy)

    NewAction.availability(NewAction)

    chaiSpy.should.have.been.called.with(NewAction)
  })
})