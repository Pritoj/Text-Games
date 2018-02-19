const { Action } = require('../../../src/Action')

let ShowAvailableActions = new Action('show actions')

const printActions = (obj, title, printer) => {
  printer(`Actions available in ${title} --------------------`)
  if(obj){
    if(obj.actions.list.length > 0){
      obj.actions.list.forEach((action)=>{
        printer(action.name)
      })
      return
    }
  }
  printer(`No Actions here`)
  printer(`------------------`)
}

ShowAvailableActions
    .setDescription('Shows all the available actions at a given moment')
  .setActionResponse((command, action,engine)=>{
    printActions(engine,'all games', engine.print)
    printActions(engine.game, 'this game', engine.print)
    printActions(engine.level, 'this level', engine.print)
    printActions(engine.scene, 'this scene', engine.print)
    printActions(engine.position, 'this position', engine.print)
  })



module.exports = ShowAvailableActions