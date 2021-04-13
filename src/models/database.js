const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testelogin', 'teste', 'testeconf115', {dialect: 'mysql', host: 'localhost'});

try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida.');
  } catch (error) {
    console.error('Falha na conexão: ', error);
  }

module.exports = sequelize;