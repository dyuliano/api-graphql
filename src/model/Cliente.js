const { Sequelize } = require('sequelize');
const { connSqlite } = require('../data/conn');

const Cliente = connSqlite.define('Cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeCompleto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroContato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
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

Cliente.sync({ alter: true });

module.exports = { Cliente };