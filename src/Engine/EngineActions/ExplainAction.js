const { Action } = require('../../../src/Action')

let ExplainAction = new Action('explain action')

ExplainAction
    .setDescription(`Explains an action. To be used as 'explain action <action-name>'`)
    .setActionResponse((command, action,engine)=>{
        const cmd = command.match(/(explain\saction)\s([\w|\s]+)/i)
        const act = cmd[2].trim()
        const actFound = engine.findActionByName(act)
        if(actFound){
            engine.print(`+++ Action '${actFound.name}' +++`)
            engine.print(actFound.description)
        }
        else{
            engine.print(`${act} not found`)
        }
    })
    .setMatcher((command)=>{
        return !!command.match(/(explain\saction)\s([\w|\s]+)/gi)
    })

module.exports = ExplainAction