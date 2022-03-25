'use strict';

const { sequelize } = require('../src/models');

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing CRUD on Magikarp routes', () => {
  let route = '/magikarp';
  let name = 'Billy Bob';
  let shiny = true;
  let id = 1;

  let testMagikarp = {
    name,
    shiny,
  };

  test('Should POST a Magikarp', async () => {
    const response = await request.post(route).send(testMagikarp);

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual(name);
    expect(response.body.shiny).toEqual(shiny);
    expect(response.body.id).toBeDefined();
  });

  test('Should GET all Magikarps', async () => {
    const response = await request.get(route);

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual(name);
    expect(response.body[0].shiny).toEqual(shiny);
    expect(response.body[0].id).toBeDefined();
  });

  test('Should GET one Magikarp', async () => {
    const response = await request.get(`${route}/${id}`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual(name);
    expect(response.body.shiny).toEqual(shiny);
    expect(response.body.id).toEqual(id);
  });

  test('Should PUT a Magikarp', async () => {
    let newName = 'John';

    const response = await request.put(`${route}/${id}`).send({ name: newName });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual(newName);
  });

  test('Should DELETE a Magikarp', async () => {
    const response = await request.delete(`${route}/${id}`);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });
});

describe('Testing CRUD on species route', () => {
  let name = 'Magikarp';
  let dexId = 129;
  let primaryType = 'water';

  let testSpecies = {
    name,
    dexId,
    primaryType,
  };

  let route = '/species';
  let id = 1;

  test('Should POST a Species', async () => {
    const response = await request.post(route).send(testSpecies);

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual(name);
    expect(response.body.dexId).toEqual(dexId);
    expect(response.body.primaryType).toEqual(primaryType);
    expect(response.body.id).toBeDefined();
  });

  test('Should GET all Species', async () => {
    const response = await request.get(route);

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual(name);
    expect(response.body[0].dexId).toEqual(dexId);
    expect(response.body[0].primaryType).toEqual(primaryType);
    expect(response.body[0].id).toBeDefined();
  });

  test('Should GET one Species', async () => {
    const response = await request.get(`${route}/${id}`);

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual(name);
    expect(response.body.dexId).toEqual(dexId);
    expect(response.body.primaryType).toEqual(primaryType);
    expect(response.body.id).toEqual(id);
  });

  test('Should PUT a Species', async () => {
    let newName = 'John';

    const response = await request.put(`${route}/${id}`).send({ name: newName });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual(newName);
  });

  test('Should DELETE a Species', async () => {
    const response = await request.delete(`${route}/${id}`);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });
});