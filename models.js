const Sequelize = require('sequelize');
const sequelize = new Sequelize('projetoestoque', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

// TABELA USUARIO

//asdasd

//=========================================================================================

//TABELA ENTREGAS
const Entrega = sequelize.define('entregas', {
    produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER(6),
        allowNull: false
    },
    dataEntrega: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
});

//Entrega.sync({ force: true})
//=========================================================================================

//TABELA FUNCIONARIO

const Funcionario = sequelize.define('funcionarios', {
    cargo: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    dataAdmissao: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    salarioBase: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 1412.00
        }
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
});

const Item = sequelize.define('itens', {
    Descricao: {
        type: Sequelize.STRING,
        allowNull: false

    },
    Quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})



//Funcionario.sync({ force: true })

Funcionario.create({
    cargo: 'Auxiliar de Produção',
    nome: 'Rogerio',
    dataAdmissao: new Date('2024-08-08T12:00:00Z'),
    salarioBase: 1450.00,
    cpf: '12345678900'
});

module.exports = Entrega;