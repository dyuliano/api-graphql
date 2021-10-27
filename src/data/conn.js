const { Sequelize } = require("sequelize");

const connSqlite = new Sequelize({
    dialect: 'sqlite',
    storage:  __dirname + '/database.sqlite'
  })

module.exports = { connSqlite };