const { Action } = require('../../../src/Action')

let ExitAction = new Action('exit')

ExitAction
  .setActionResponse((action,engine)=>{
    engine.print('Bye')
    engine.stop()
  })


module.exports = ExitAction