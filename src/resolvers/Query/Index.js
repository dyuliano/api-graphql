const { perfilList } = require("../../data/db");
const { Usuario } = require("../../model/Usuario");
const { Produto } = require("../../model/Produto");
const { Cliente } = require("../../model/Cliente");
const { Pedido } = require("../../model/Pedido");

module.exports = {
      
    perfil(_, args){
        if(args.id) return perfilList.filter(p => p.id === args.id);
        return perfilList;
    },
    usuario(_, args){
        if(args.id) return Usuario.findAll({ where: { id: args.id, }});
        if(args.email) return Usuario.findAll({ where: { email: args.email, }});        
        return Usuario.findAll();
    },
    produto(_, args){
        if(args.id) return Produto.findAll({ where: { id: args.id, }});      
        return Produto.findAll();
    },
    cliente(_, args){
        if(args.id) return Cliente.findAll({ where: { id: args.id, }});      
        return Cliente.findAll();
    },
    pedido(_, args){
        if(args.id) return Pedido.findAll({ where: { id: args.id, }});      
        return Pedido.findAll();
    },
}