const { Action } = require('../../../src/Action')

let ExitAction = new Action('exit')

ExitAction
  .setActionResponse((action,engine)=>{
    console.log('Bye')
    engine.stop()
  })


module.exports = ExitAction