const path = require('path');
const { resolve } = require('path');

//pegando os caminhos do arquivo .env e .env.test
const mypath = resolve(path.resolve(), '../', '.env')
//const mypath_test = resolve(path.resolve(), '../', '.env.test')

//pegando os seus respectivo credenciais do env
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : mypath });
 
  module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    storage: "./__tests__/database.sqlite",
    define: {
      timestamps: true,
      underscored: true,
      undersocredALL: true,
    }
  };