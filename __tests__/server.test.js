'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing that API returns error status on bad requests', () => {

  test('Test for 404 on bad route', async () => {
    const response = request.get('/potato');

    expect(response.status).toEqual(404);
  });
});