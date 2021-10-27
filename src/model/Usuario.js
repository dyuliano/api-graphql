const { Sequelize } = require('sequelize');
const { connSqlite } = require('../data/conn');

const Usuario = connSqlite.define('Usuario', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroContato: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perfil: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
},
{
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
},)

//Usuario.sync();
Usuario.sync({ alter: true });

module.exports = { Usuario };