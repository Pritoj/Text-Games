const {Action} = require('../../../src/Action')

let SelectCharacter = new Action('choose character')

SelectCharacter
    .setDescription(`Selects the character provided. To be used as 'choose character <character-name>'`)
    .setActionResponse((command, action, engine) => {
        // get the command
        const matches = command.match(/(choose\scharacter)\s(\w+)/i);
        // get the char name
        const charName = matches[2]
        // find the char
        const char = engine.game.characters.list.find((v)=>{
            return v.name === charName;
        })

        if(char){
            engine.setCharacter(char)
            engine.print(`${char.name} selected`)
        }
        else{
            engine.print('Character not found')
        }

    })
    .setMatcher((command) => {
        return !!command.match(/(choose\scharacter)\s(\w+)/gi)
    })


module.exports = SelectCharacter