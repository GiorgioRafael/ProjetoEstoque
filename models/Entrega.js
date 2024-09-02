const database = require('./database');

const Entrega = database.sequelize.define('entregas', {
    produto: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: database.Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: database.Sequelize.INTEGER(6),
        allowNull: false
    },
    dataEntrega: {
        type: database.Sequelize.DATE,
        defaultValue: database.Sequelize.NOW,
        allowNull: false
    }
});
//Entrega.sync({ force: true })

module.exports = Entrega;

/*
Entrega.create({
        produto: 'Biscoito Bauducco',
        descricao: 'CAIXA COM 30UND 80G',
        quantidade: 35,
        dataEntrega: new Date('2024-08-08T12:00:00Z')
    });
*/
