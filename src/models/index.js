'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const magikarpSchema = require('./magikarp.schema');
const speciesSchema = require('./species.schema');

const CollectionClass = require('./collection-class');

const DATABASE_URL = process.env.NODE_ENV === 'test' ?
  'sqlite:memory' :
  process.env.DATABASE_URL || 'postgresql://localhost:5432';

const sequelize = new Sequelize(DATABASE_URL,
  { // Heroku stuff from class repo "class-03"
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });  

const MagikarpModel = magikarpSchema(sequelize, DataTypes);
const SpeciesModel = speciesSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  MagikarpCollection: new CollectionClass(MagikarpModel),
  SpeciesCollection: new CollectionClass(SpeciesModel),
};