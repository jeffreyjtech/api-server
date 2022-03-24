'use strict';

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