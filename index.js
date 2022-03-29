'use strict';

// This is all we need to do in the top level JS file in a modular server
// Require sequelize from our models/index.js
const { sequelize } = require('./src/models');

// Require our start function from server.js
const { start } = require('./src/server.js');

// Finally, sync sequelize and run the start function
sequelize.sync()
  .then(() => {
    console.log('Synced database!');
  })
  .catch(console.error);

start();