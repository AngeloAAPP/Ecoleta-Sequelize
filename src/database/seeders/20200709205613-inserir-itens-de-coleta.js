'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('itens', 
      [
        {
          imagem: 'lampadas.svg',
          titulo: 'Lâmpadas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imagem: 'Baterias.svg',
          titulo: 'Pilhas e Baterias',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imagem: 'papeis-papelao.svg',
          titulo: 'Papéis e Papelão',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imagem: 'eletronicos.svg',
          titulo: 'Resíduos Eletrônicos',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imagem: 'organicos.svg',
          titulo: 'Resíduos Orgânicos',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imagem: 'Oleo.svg',
          titulo: 'Óleo de Cozinha',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {    
      await queryInterface.bulkDelete('itens', null, {});
  }
};
