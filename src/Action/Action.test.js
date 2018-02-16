const chai = require('chai')
const should = chai.should()
const spies = require('chai-spies')

chai.use(spies)

const Action = require('./Action')

describe('Check if we can create an action with this name', () => {
  let testActionName = 'NewAction'

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

  it('Should match to the name if no matcher is given', () => {
    let NewAction = new Action(testActionName)

    NewAction.matches(testActionName).should.equal(true)
  })

  it('Should match to the matching function', () => {
    let NewAction = new Action(testActionName)

    NewAction.matches(testActionName).should.equal(true)

    NewAction
      .setMatcher((command)=>{
        return command === 'jinga'
      })
    
      NewAction.matches(testActionName).should.equal(false)

      NewAction.matches('jinga').should.equal(true)
  })
})