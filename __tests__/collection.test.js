'use strict';

const { MagikarpCollection } = require('../src/models');
const { sequelize } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing collections', () => {
  test('Should create a Magikarp', async () => {
    let name = 'Billy Bob';
    let shiny = true;

    const magikarp = await MagikarpCollection.create({ name, shiny });

    expect(magikarp.name).toEqual(name);
  });
});