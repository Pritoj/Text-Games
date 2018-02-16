const Action = require('../src/Action');

const ExitAction = new Action('exit-action');

ExitAction.setActionResponse((a,e,c)=>{
  console.log(`
    ${a.name}: We are exiting the game now. See you soon.
  `);
})

module.exports = ExitAction;