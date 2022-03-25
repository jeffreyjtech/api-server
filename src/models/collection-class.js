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

  async readAll() {
    let allInstances = await this.model.findAll();

    return allInstances;
  }

  update() {
    console.log('update method WIP');
  }

  delete() {
    console.log('delete method WIP');
  }
}

module.exports = CollectionClass;