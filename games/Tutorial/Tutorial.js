const { Game } = require('../../src/Game')
const AmazingAction = require('./GameActions/AmazingAction')
const ExitAction = require('./GameActions/ExitAction')

let Tutorial = new Game('Game Engine Tutorial')

Tutorial
  .setDescription(`
    This will help you get a hang of the engine for a bit.
    Currently you are in the start phase.

    Throughout you will have a few actions available.

    Currently since you are in the start position, your actions are game actions.
  `)
  
Tutorial
  .actions
  .push(AmazingAction)

Tutorial
  .actions
  .push(ExitAction)

module.exports = Tutorial;