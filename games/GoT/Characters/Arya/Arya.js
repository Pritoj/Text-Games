const {
  Character,
  CharacterAttribute,
  InventoryItem
} = require('../../../../src/Character');

// Creating Arya's sword
const Needle = new InventoryItem('needle')

Needle
  .setName('Needle - The Sword')
  .setDescription(`This is Arya's killer sword. Sharp and efficient`)
  .setType('weapon')
  .setValue(100)


const Health = new CharacterAttribute('health')

Health
  .setName('Health')
  .setValue(75)

const Magic = new CharacterAttribute('magic')

Magic
  .setName('Magic')
  .setValue(50)

const Skill = new CharacterAttribute('skill')

Skill
  .setName('Skill')
  .setValue(100)

const Arya = new Character('Arya')

Arya
  .setDescription('Arya Stark, the daughter of Ned Stark. She saw her father murdered by the bastard Joffery and is now on a missoin to kill all who are on her list')
  .addInventoryItem(Needle)
  .addAttribute(Health)
  .addAttribute(Magic)
  .addAttribute(Skill)

module.exports = Arya;