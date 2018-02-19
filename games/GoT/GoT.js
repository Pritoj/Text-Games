const {
  Game
} = require('../../src/Game')

const Arya = require('./Characters/Arya/Arya')
const JonSnow = require('./Characters/JonSnow/JonSnow')

const GoT = new Game('Game of Thrones')

GoT
  .setDescription(`
Several royal families desire the Iron Throne to gain control of Westeros. 

Whilst kingdoms fight each other for power, 

a sinister force 

lurks beyond the Wall in the north.......

Welcome to the Game of Thrones.

Use the 'show actions' command at anytime to see what actions are available

  `)


GoT
  .addCharacter(Arya)
  .addCharacter(JonSnow)




module.exports = GoT;