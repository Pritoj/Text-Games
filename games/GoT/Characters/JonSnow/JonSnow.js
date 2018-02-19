const {
  Character,
  CharacterAttribute,
  InventoryItem
} = require('../../../../src/Character');

// Creating Arya's sword
const Longclaw = new InventoryItem('needle')

Longclaw
  .setName('Longclaw - Valyrian steel sword')
  .setDescription(`Given to Jon by Lord Commander`)
  .setType('weapon')
  .setValue(100)


const Health = new CharacterAttribute('health')

Health
  .setName('Health')
  .setValue(100)

const Magic = new CharacterAttribute('magic')

Magic
  .setName('Magic')
  .setValue(75)

const Skill = new CharacterAttribute('skill')

Skill
  .setName('Skill')
  .setValue(50)

const JonSnow = new Character('Jon Snow')

JonSnow
  .setDescription('Jon Snow, the bastard of lord Eddard Stark')
  .addInventoryItem(Longclaw)
  .addAttribute(Health)
  .addAttribute(Magic)
  .addAttribute(Skill)

module.exports = JonSnow;