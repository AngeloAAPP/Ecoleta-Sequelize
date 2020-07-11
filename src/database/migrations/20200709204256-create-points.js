'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
       return queryInterface.createTable('points', { 
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
         nome: {
          type: Sequelize.STRING,
          allowNull: false
         },
         email: {
          type: Sequelize.STRING,
          allowNull: false
         },
         whatsapp: {
          type: Sequelize.STRING,
          allowNull: false
         },
         latitude: {
          type: Sequelize.FLOAT,
          allowNull: false
         },
         longitude: {
          type: Sequelize.FLOAT,
          allowNull: false
         },
         cidade: {
          type: Sequelize.STRING,
          allowNull: false
         },
         uf: {
          type: Sequelize.STRING(2),
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
    
       return queryInterface.dropTable('points');

  }
};
