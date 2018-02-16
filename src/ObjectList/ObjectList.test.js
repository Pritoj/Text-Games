const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const ObjectList = require('./ObjectList')

const ObjectListErrors = require('./ObjectListErrors')

describe('Testing the position class', () => {
  class TestClass {
    constructor(name){
      this.name = name;
    }
  }

  it('Should not let me add anything to the object list', () => {
    let NewObjectList = new ObjectList(TestClass)

    expect(() => { NewObjectList.push('lalal') })
      .to
      .throw(ObjectListErrors.InvalidTypeAddedError)

  })

  it('Should not let me add an action with the same name twice', () => {
    let NewObjectList = new ObjectList(TestClass,'name')

    let testObj1 = new TestClass('tester')
    let testObj2 = new TestClass('tester')

    expect(() => { NewObjectList.push(testObj1) })
      .to
      .not
      .throw()

    expect(() => { NewObjectList.push(testObj2) })
      .to
      .throw(ObjectListErrors.ObjectDuplication)
  })

})