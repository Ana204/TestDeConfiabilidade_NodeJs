const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return User;
}