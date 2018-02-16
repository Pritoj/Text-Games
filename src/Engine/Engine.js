const { NameAndDescription } = require('../NameAndDescription')
const { ObjectList } = require('../ObjectList')
const { Action } = require('../Action')
const { Game } = require('../Game')

class Engine extends NameAndDescription {
  constructor(game){
    super('Text Game Engine')
    this.game = game;
    this.actions = new ObjectList(Action, 'name')

    this.findAction = this.findAction.bind(this)

    // By default position is undefined
    // A start action should be bound ot the game to set these
    this.level = null
    this.scene = null
    this.position = null
  }

  /**
   * This is just to start running the game
   */
  start(){
    console.log('Welcome to the text game engine')
    console.log(`Your Game for today is ${this.game.name}`)
    console.log(`${this.game.description}`)
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data',this.findAction)
  }

  findAction(command){
    command = command.trim()
    let currentAction = this.game.actions.list.find((v)=>(v.matches(command)))
    if(!!currentAction){
      currentAction.response(currentAction, this)
    }
    else{
      console.log(`Can't find this action`)
    }
  }

  stop(){
    process.exit()
  }
  
  
}

module.exports = Engine