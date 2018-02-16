const { Action } = require('../../../src/Action')

let AmazingAction = new Action('amazing')

AmazingAction
  .setDescription('This syas amazing when you ask it to')
  .setActionResponse((action)=>{
    console.log(`In the response of ${action.name}`)
    for(i = 0; i< 10; i++){
      console.log('You are amazing')
    }
  })


module.exports = AmazingAction;