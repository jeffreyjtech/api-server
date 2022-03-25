'use strict';

const { MagikarpCollection, SpeciesCollection } = require('../src/models');
const { sequelize } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing Magikarp collection', () => {
  let name = 'Billy Bob';
  let shiny = true;
  let id = 1;

  let testMagikarp = {
    name,
    shiny,
  };

  test('Should create a Magikarp', async () => {

    const magikarp = await MagikarpCollection.create(testMagikarp);

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

  test('Should get one Magikarp', async () => {

    const magikarp = await MagikarpCollection.read(id);

    console.log(magikarp);

    expect(magikarp.name).toEqual(name);
    expect(magikarp.id).toEqual(id);
  });

  test('Should update a Magikarp', async () => {

    let newName = 'John';

    const magikarp = await MagikarpCollection.update(id, { name: newName });

    expect(magikarp.name).toEqual(newName);
  });

  test('Should delete a Magikarp', async () => {

    const magikarp = await MagikarpCollection.delete(id);

    expect(magikarp).toEqual(null);
  });
});

describe('Testing Species collection', () => {
  let name = 'Magikarp';
  let dexId = 129;
  let primaryType = 'water';

  let testSpecies = {
    name,
    dexId,
    primaryType,
  };

  let id = 1;


  test('Should create a Species', async () => {

    const species = await SpeciesCollection.create(testSpecies);

    expect(species.name).toEqual(name);
  });

  test('Should throw an unhandled error if passing in invalid data', async () => {
    let name = 'Billy Bob';

    expect.assertions(1);

    try {
      await SpeciesCollection.create({ name });
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
    }
  });

  test('Should get all Species', async () => {

    const speciesArray = await SpeciesCollection.readAll();

    console.log(speciesArray);

    expect(speciesArray[0].name).toEqual(name);
  });

  test('Should get one Species', async () => {

    const species = await SpeciesCollection.read(id);

    console.log(species);

    expect(species.name).toEqual(name);
    expect(species.id).toEqual(id);
  });

  test('Should update a Species', async () => {

    let newPrimaryType = 'electric';

    const species = await SpeciesCollection.update(id, { name: newPrimaryType });

    expect(species.name).toEqual(newPrimaryType);
  });

  test('Should delete a Species', async () => {

    const species = await SpeciesCollection.delete(id);

    expect(species).toEqual(null);
  });
});