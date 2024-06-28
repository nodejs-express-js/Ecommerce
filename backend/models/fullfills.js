'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fullfills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fullfills.belongsTo(models.order,{
        foreignKey:'orderId'
      })
      fullfills.belongsTo(models.Seller,{
        foreignKey:'sellerId'
      })
    }
  }
  fullfills.init({
    orderFullFilled: DataTypes.BOOLEAN,
    orderFullFilledDate: DataTypes.DATE,
    pay: DataTypes.FLOAT,
    sellerId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'fullfills',
  });
  return fullfills;
};