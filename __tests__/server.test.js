'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Test block WIP', () => {

  test('Test WIP', async () => {
    await request.get('/');
  });
});