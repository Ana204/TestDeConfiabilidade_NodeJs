const bcrypt = require("bcryptjs");

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
    }
    )

    return User;
}