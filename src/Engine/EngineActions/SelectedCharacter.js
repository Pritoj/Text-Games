const { Action } = require('../../../src/Action')

let SelectedCharacter = new Action('show selected character')

SelectedCharacter
    .setDescription(`Prints the name and other info of the selected character`)
    .setActionResponse((command, action,engine)=>{
        engine.print('+++ Selected Character +++')
        engine.print(engine.character)
        engine.print('-------------')
        engine.print(engine.character.description)
    })

module.exports = SelectedCharacter