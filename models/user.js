const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("Users", {
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return users;
}