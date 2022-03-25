const speciesSchema = (sequelize, DataTypes) => {

  return sequelize.define('species', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dexId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    primaryType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondaryType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

module.exports = speciesSchema;