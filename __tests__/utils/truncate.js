//arquivo para mapear e deletar todos os dados do banco do sqlite

const {sequelize} = require('../../models');

module.exports = () => {
    return Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({truncate: true, force: true})
    }))
}