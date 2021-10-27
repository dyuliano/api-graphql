const usuario = require("./Usuario");
const cliente = require("./Cliente");
const produto = require("./Produto");
const pedido = require("./Pedido");

module.exports = {
    ...usuario,
    ...cliente,
    ...produto,
    ...pedido
}