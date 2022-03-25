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
  let name = 'Billy Bob';
  let shiny = true;
  
  test('Should create a Magikarp', async () => {

    const magikarp = await MagikarpCollection.create({ name, shiny });

    expect(magikarp.name).toEqual(name);
  });

  test('Should throw an unhandled error if passing in invalid data', async () => {
    let name = 'Billy Bob';

    expect.assertions(1);

    try {
      await MagikarpCollection.create({ name });
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test('Should get all Magikarps', async () => {

    const magikarpArray = await MagikarpCollection.readAll();

    console.log(magikarpArray);
    
    expect(magikarpArray[0].name).toEqual(name);
  });
});