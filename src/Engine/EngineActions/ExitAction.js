const { Action } = require('../../../src/Action')

let ExitAction = new Action('exit')

ExitAction
    .setDescription('Exits the game')
  .setActionResponse((command, action,engine)=>{
    engine.print('Bye')
    engine.stop()
  })


module.exports = ExitAction