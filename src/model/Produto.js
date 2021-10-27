const { Sequelize } = require('sequelize');
const { connSqlite } = require('../data/conn');

const Produto = connSqlite.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unidadeMedida: {
        type: Sequelize.STRING,
        allowNull: false
    },
    peso: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantidadeEstoque: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
{
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
},)

Produto.sync({ alter: true });

module.exports = { Produto };