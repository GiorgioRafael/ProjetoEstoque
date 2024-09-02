const database = require('./database');

const Usuario = database.sequelize.define('usuarios', {
        Email: {
            type: database.Sequelize.STRING(50),
            allowNull: false
        },
        Senha: {
            type: database.Sequelize.STRING(30),
            allowNull: false
        }
    });

    //Usuario.sync({ force: true })
    module.exports = Usuario;