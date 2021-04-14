'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     // Add seed commands here.
     //Example:
      await queryInterface.bulkInsert('Users', [{
      firstName: 'John Doe', 
      lastName:  'Doe',
      email: 'johndoe@email.com',  
      createdAt: '2021-04-14 14:47:32.472305', 
      // datetime: '', 
      updatedAt: '2021-04-14 14:47:32.472305'
      // isBetaMember: false
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    // Add commands to revert seed here.
     
    //Example:
     await queryInterface.bulkDelete('Users', null, {});
    
  }
};
