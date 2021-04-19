const path = require('path');
const { resolve } = require('path');

//pegando os caminhos do arquivo .env e .env.test
const mypath = resolve(path.resolve(), '../', '.env')
const mypath_test = resolve(path.resolve(), '../', '.env.test')

//pegando os seus respectivo credenciais do env
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : mypath });


//configuração do servidor 
const express = require("express");

class AppController {
    constructor(){
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.use(require("./router"));
    }
}

module.exports = new AppController().express;