const { Action } = require('../../../src/Action')

let ShowAvailableCharacters = new Action('show characters')

const printCharacters = (obj, title, printer) => {
  printer(`Characters available in ${title}`)
  if(obj){
    if(obj.characters.list.length > 0){
      obj.characters.list.forEach((character)=>{
        printer('+++++++++++++++++++++++')
        printer(character.name)
        printer(character.description)
      })
      return
    }
  }
  printer(`No Characters here`)
}

ShowAvailableCharacters
    .setDescription('Shows the characters available')
  .setActionResponse((command, action,engine)=>{
    printCharacters(engine.game,engine.game.name, engine.print)
    
  })



module.exports = ShowAvailableCharacters