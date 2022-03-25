'use strict';

class CollectionClass {
  constructor(model) {
    this.model = model;
  }

  async create(json){
    let instance = await this.model.create(json);

    return instance;
  }

  read() {
    console.log('read method WIP');
  }

  update() {
    console.log('update method WIP');
  }

  delete() {
    console.log('delete method WIP');
  }
}

module.exports = CollectionClass;