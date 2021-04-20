const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const path = require('path');
const { resolve } = require('path');

//pegando os caminhos do arquivo .env e .env.test
const mypath = resolve(path.resolve(), '../', '.env')
//const mypath_test = resolve(path.resolve(), '../', '.env.test')

//pegando os seus respectivo credenciais do env
require("dotenv").config({
   path: process.env.NODE_ENV === "test" ? ".env.test" : mypath});

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING
    }, 
    //toda vez antes de salvar um novo usuario ele vai setar o campo password_hash
    {
        hooks:{
            beforeSave: async users => {
               if(users.password){
                   users.password_hash = await bcrypt.hash(users.password, 8)
               }
            }
        }
    })

    //metodo para verificar se senha é igual ao hash (esse this é para ter acesso a user)
    User.prototype.ckeckPassword = function(password){
        return bcrypt.compare(password, this.password_hash)
    };

    //método para gerar o meu token (this para eu ter acesso ao id do user)
    User.prototype.generateToken = function(){
        return jwt.sign({id: this.id}, process.env.APP_SECRET)
    }

    return User;
}