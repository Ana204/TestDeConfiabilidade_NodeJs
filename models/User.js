const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return User;
}