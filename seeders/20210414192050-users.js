'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [
    {
    email: 'teste@hotmail.com.br',
    password_hash: '1233321'
    },

    {
      email: 'teste2gmail.com',
      password_hash: '98989'
    }
], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
