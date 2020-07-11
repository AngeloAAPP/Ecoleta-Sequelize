'use strict';

const { sequelize } = require("../models/Item");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
       return queryInterface.createTable('itens', { 
         id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
         },
         imagem: {
           type: Sequelize.STRING,
           allowNull: false
         },
         titulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
        });
  },

  down: async (queryInterface, Sequelize) => {
    
       return queryInterface.dropTable('itens');

  }
};
