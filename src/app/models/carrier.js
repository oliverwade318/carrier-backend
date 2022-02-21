'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carrier.init({
    name: {
      type: DataTypes.CITEXT,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Carrier',
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ['id'] },
    },
  });
  return Carrier;
};