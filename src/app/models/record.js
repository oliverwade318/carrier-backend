'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.State, {foreignKey: 'stateId'});
      this.belongsTo(models.Carrier, {foreignKey: 'carrierId'});
      this.belongsTo(models.InsuranceType, {foreignKey: 'insuranceTypeId'});
      // define association here
    }
  }
  Record.init({
    stateId: DataTypes.INTEGER,
    insuranceTypeId: DataTypes.INTEGER,
    carrierId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Record',
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: ['State', 'Carrier', 'InsuranceType']
    },
  });
  return Record;
};