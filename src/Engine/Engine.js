const {NameAndDescription} = require('../NameAndDescription')
const {ObjectList} = require('../ObjectList')
const {Action} = require('../Action')
const {Game} = require('../Game')
const {
    NoPositionFound,
    NoSceneFound,
    NoLevelFound
} = require('./EngineErrors')

const ExitAction = require('./EngineActions/ExitAction')
const ShowAvailableActions = require('./EngineActions/ShowAvailableActions')
const ShowAvailableCharacters = require('./EngineActions/ShowAllCharacters')
const SelectCharacter = require('./EngineActions/SelectCharacter')
const SelectedCharacter = require('./EngineActions/SelectedCharacter')
const ExplainAction = require('./EngineActions/ExplainAction')

addDefaultActions = (engine) => {
    engine
        .addAction(ExitAction)
        .addAction(ShowAvailableActions)
        .addAction(ShowAvailableCharacters)
        .addAction(SelectedCharacter)
        .addAction(SelectCharacter)
        .addAction(ExplainAction)
}
class Engine extends NameAndDescription {
    constructor(game) {
        super('Text Game Engine')
        this.game = game;
        this.actions = new ObjectList(Action, 'name')

        this.findAction = this.findAction.bind(this)
        this.commandReceived = this.commandReceived.bind(this)
        this.setCurrentLevel = this.setCurrentLevel.bind(this)
        this.setCurrentPosition = this.setCurrentPosition.bind(this)
        this.setCurrentScene = this.setCurrentScene.bind(this);
        this.addAction = this.addAction.bind(this);

        // By default position is undefined
        // A start action should be bound ot the game to set these
        this.level = null
        this.scene = null
        this.position = null
        this.character = null

        addDefaultActions(this)
    }

    /**
     * This is just to start running the game
     */
    start() {
        this.print('Welcome to the text game engine')
        this.print(`Your Game for today is ${this.game.name}`)
        this.print(`${this.game.description}`)
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', this.commandReceived)
        return this
    }

    commandReceived(command) {
        // trim out whitespace or new lines
        command = command.trim()
        let action = this.findAction(command)
        if (!action) {
            this.print('Action not found')
        }
        else {
            // Call the action
            action.response(command, action, this)
        }
    }

    /**
     * Tries to identify which action to call
     * @param {string} command
     */
    findAction(command) {
        // set current action to nothing
        let currentAction = null;
        const objectsToCheck = [
            this,
            this.game,
            this.level,
            this.scene,
            this.position
        ];

        for (let i in objectsToCheck) {
            // If the object is set
            if (objectsToCheck[i] !== null) {
                let listToCheck = objectsToCheck[i].actions.list
                // Check if we can find the action here
                currentAction = this.findActionInList(listToCheck, command)
                if (currentAction) {
                    // if action is found, breakout
                    break;
                }
            }
        }
        return currentAction;
    }

    /**
     * Tries to identify which action to call
     * @param {string} command
     */
    findActionByName(command) {
        // set current action to nothing
        let currentAction = null;
        const objectsToCheck = [
            this,
            this.game,
            this.level,
            this.scene,
            this.position
        ];

        for (let i in objectsToCheck) {
            // If the object is set
            if (objectsToCheck[i] !== null) {
                let listToCheck = objectsToCheck[i].actions.list
                // Check if we can find the action here
                currentAction = listToCheck.find((act)=>act.name === command)
                if (currentAction) {
                    // if action is found, breakout
                    break;
                }
            }
        }
        return currentAction;
    }

    /**
     *
     * @param {array} list
     * @param {string} command
     */
    findActionInList(list, command) {
        if (!list) {
            return false
        }
        return list.find((v) => (v.matches(command)))
    }



    /**
     * Sets the current game to this one
     * @param {Level} level
     */
    setCurrentLevel(level) {
        this.level = level
        return this
    }

    /**
     *
     * @param {Scene} scene
     */
    setCurrentScene(scene) {
        this.scene = scene
        return this
    }

    /**
     *
     * @param {Position} position
     */
    setCurrentPosition(position) {
        this.position = position
        return this
    }

    setCharacter(char) {
        this.character = char
        return this
    }

    /**
     * This function starts the game. If no level, scene and position is set it finds the firs of each
     * if none are found, it will throw an error
     */
    startGame() {
        // If no level found
        if (!this.level) {
            // check if there is a level in the game
            if (this.game.levels.list.length === 0) {
                // throw no levels error
                throw new NoLevelFound()
            }
            this.setCurrentLevel(this.game.levels.list[0])
        }

        // If no scene found
        if (!this.scene) {
            // check if there is a level in the game
            if (this.level.scenes.list.length === 0) {
                // throw no levels error
                throw new NoSceneFound()
            }
            this.setCurrentScene(this.level.scenes.list[0])
        }

        // If no scene found
        if (!this.position) {
            // check if there is a level in the game
            if (this.scene.positions.list.length === 0) {
                // throw no levels error
                throw new NoPositionFound()
            }
            this.setCurrentPosition(this.scene.position.list[0])
        }
    }

    /**
     * Kills the engine
     */
    stop() {
        process.exit()
    }

    print(stuffToPrint) {
        console.log(stuffToPrint)
    }

    addAction(action) {
        this.actions.list.push(action)
        return this
    }

    setScene(scene){

    }
}

module.exports = Engine