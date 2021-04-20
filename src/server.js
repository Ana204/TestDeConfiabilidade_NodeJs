const app = require('./app')

const path = require('path');
const { resolve } = require('path');


//pegando o caminho do .env
const mypath = resolve(path.resolve(), '../', '.env')

//configurando o caminho do .env
require("dotenv").config({path: mypath});

const port = process.env.APP_PORT
app.listen(port, function () {
    console.log(`A api esta rodando em http://localhost:${process.env.APP_PORT}​​​​​​​​`)
})