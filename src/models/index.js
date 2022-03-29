'use strict';

// Start like so:
// 1. Import sequelize and data types
// This will probably be the only direct import of sequelize node-modules
// And import our schemas
const { Sequelize, DataTypes } = require('sequelize');
const magikarpSchema = require('./magikarp.schema');
const speciesSchema = require('./species.schema');

// 2. Import the module which "class-ifies" our schemas and gives them interface methods
const CollectionClass = require('./collection-class');

// 3. Assign the URL for the DB to a variable
const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite:memory' :
  process.env.DATABASE_URL || 'postgresql://localhost:5432';

// 4. Instantiate a new Sequelize DB with the URL and assign the representational object to a variable.
const sequelize = new Sequelize(DATABASE_URL,
  { // Heroku stuff from class repo "class-03"
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });  

// 5. Instantiate Models using the imported schemas
const MagikarpModel = magikarpSchema(sequelize, DataTypes);
const SpeciesModel = speciesSchema(sequelize, DataTypes);

// 6. Export sequelize and the "class-ified" models.
module.exports = {
  sequelize,
  MagikarpCollection: new CollectionClass(MagikarpModel),
  SpeciesCollection: new CollectionClass(SpeciesModel),
};