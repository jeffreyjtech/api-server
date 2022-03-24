'use strict';

const { sequelize } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});