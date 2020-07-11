'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
       return queryInterface.createTable('point_itens', { 
         id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
         },
         point_id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           references: {
             model: 'points',
             key: 'id'
           },
           onUpdate: 'CASCADE',
           onDelete: 'CASCADE'
         },
         item_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'itens',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
    
       return queryInterface.dropTable('point_itens');

  }
};
