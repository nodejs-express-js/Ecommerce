'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fullfills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderFullFilled: {
        type: Sequelize.BOOLEAN
      },
      orderFullFilledDate: {
        type: Sequelize.DATE
      },
      pay: {
        type: Sequelize.FLOAT
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Sellers",
          key:"id"
        }
      },
      orderId: {
        type: Sequelize.INTEGER,
        references:{
          model:"orders",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fullfills');
  }
};