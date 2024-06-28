'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.customer,{
        foreignKey:'customerId'
      })
      order.hasMany(models.fullfills,{
        foreignKey:'orderId'
      })
      order.belongsTo(models.payment,{
        foreignKey:'paymentId'
      })
    }
  }
  order.init({
    customerId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    productImage: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    orderFullFilled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};