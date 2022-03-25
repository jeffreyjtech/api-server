'use strict';

class CollectionClass {
  constructor(model) {
    this.model = model;
  }

  async create(json){
    let instance = await this.model.create(json);

    return instance;
  }

  async read(id) {
    let instance = await this.model.findOne({where: {id: id}});

    return instance;
  }

  async readAll() {
    let allInstances = await this.model.findAll();

    return allInstances;
  }

  async update(id, json) {

    await this.model.update(json, {where: {id: id}});

    let instance = await this.model.findOne({where: {id: id}});

    return instance;
  }

  async delete(id) {
    await this.model.destroy({where: {id: id}});

    let instance = await this.model.findOne({where: {id: id}});

    return instance;
  }
}

module.exports = CollectionClass;