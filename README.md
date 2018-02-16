# Text Game
SO this is going to be a tiny library for running a text based game. Basic concepts are as follows:

1. Game
2. Level
3. Room
4. Position
5. Action

## Game
This is the basic game 

## Level

## Room

## Position

## Action
This is the basic object. This refers to an aciton which the user wants to perform.
They can be added to a Game (e.g. `SaveAction`), Level (e.g. `ExitLevelAction`), Room (e.g. `MoveNorthAction`) or Position (e.g. `PickSpoonAction`).

### Methods

These are all the methods available in an `Action`. If the methos is chainable it will be mentioned

#### setActionName(name: string)
This sets the action's name

