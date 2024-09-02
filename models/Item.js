const database = require('./database');

const Item = database.sequelize.define('itens', {
    Codigo: {
        type: database.Sequelize.STRING(15),
        allowNull: false,
        descricao: "Código de barras do produto"
    },
    Descricao: {
        type: database.Sequelize.STRING(100),
        allowNull: false,
        descricao: "Descrição do produto"

    },
    Quantidade: {
        type: database.Sequelize.INTEGER,
        allowNull: false,
        descricao: "Quantidade do produto no estoque"
    },
    Preco: {
        type: database.Sequelize.DECIMAL(10,2),
        allowNull: false,
        descricao: "Preço do produto à venda"
    },
    Pcompra: {
        type: database.Sequelize.DECIMAL(10,2),
        allowNull: false,
        descricao: "Preço da compra do produto"
    },
    Lucroliq: {
        type: database.Sequelize.DECIMAL(15,2),
        allowNull: true,
        descricao: "Lucro líquido do produto"
    },
    Lucro: {
        type: database.Sequelize.DECIMAL(5,2),
        allowNull: true,
        descricao: "Lucro em % do produto"
    }
    

})
/*
Item.create({
    Codigo: '7891000368992',
    Descricao: "Barra De Chocolate Nestle Classic Duo Chocolate 80G",
    Quantidade: 10
})
*/

//Item.sync({ force: true })
module.exports = Item;