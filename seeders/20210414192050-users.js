'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

       await queryInterface.bulkInsert('users', [{
        email: 'paulaF@gmail.com',
        password_hash: '$2a$08$a82GsTVOBKTxk2pz3DkW2O8yz.ufSNPLQPYjSj7g0k3CcwJ4E2wGe',
        created_at: '20210415185026',
        updated_at: '20210415185026'
      },
      {
        email: 'ana@hotmail.com.br',
        password_hash: '$2a$08$a82GsTVOBKTxk2pz3DkW2O8yz.ufSNPLQPYjSj7g0k3CcwJ4E2wGe',
        created_at: '20210415185026',
        updated_at: '20210415185026'
      },
      {
        email: 'fernando@hotmail.com',
        password_hash: '$2a$08$a82GsTVOBKTxk2pz3DkW2O8yz.ufSNPLQPYjSj7g0k3CcwJ4E2wGe',
        created_at: '20210415185026',
        updated_at: '20210415185026'
      }
    
    ],{});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
