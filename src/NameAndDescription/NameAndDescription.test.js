const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const spies = require('chai-spies')

chai.use(spies)

const NameAndDescrpition = require('./NameAndDescription')

describe('Testing the class class', () => {
  let className = 'NewName'
  let classChangeName = 'ChangedName'

  it(`Should let me create a class with '${className}'`, () => {
    let newObj = new NameAndDescrpition(className)

    newObj.name.should.be.a('string')

    newObj.name.should.equal(className)
  });

  it(`Should le tme change the name via setName method to ${classChangeName}`, () => {
    let newObj = new NameAndDescrpition(className)

    newObj.name.should.be.a('string')

    newObj.name.should.equal(className)

    newObj
      .setName(classChangeName)

    newObj.name.should.be.a('string')

    newObj.name.should.equal(classChangeName)
  });
});