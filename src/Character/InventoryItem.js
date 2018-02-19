
class InventoryItem {
  constructor(key){
    this.key = key
    this.name = key
    this.description = key
    this.type = null
    this.value = null;
  }

  setKey(key){
    this.key = key;
    return this;
  }

  setName(name){
    this.name = name;
    return this;
  }

  setDescription(description){
    this.description = description;
    return this;
  }

  setValue(value){
    this.value = value;
    return this;
  }

  setType(type){
    this.type = type;
    return this;
  }
}

module.exports = InventoryItem