const { Sequelize } = require('sequelize');
const { connSqlite } = require('../data/conn');

const Pedido = connSqlite.define('Pedido', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    produto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parcelas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valorUnitario: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    comprador: {
        type: Sequelize.INTEGER,
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

Pedido.sync({ alter: true });

module.exports = { Pedido };