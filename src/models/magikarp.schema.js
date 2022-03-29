'use strict';

// The way we're instantiating a schema here is to export a function.
// No imports are required because they will be provided via the args
// When called in another module, this function will execute the sequelize.define() method.
// The method returns the model created by that method
const magikarpSchema = (sequelize, DataTypes) => {

  return sequelize.define('magikarp', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shiny: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};

module.exports = magikarpSchema;