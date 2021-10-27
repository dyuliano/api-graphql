const { Pedido } = require("../../model/Pedido");

module.exports = {
    incluirPedido(_, { dados }) { 

        const { produto, parcelas, valorUnitario, comprador } = dados;

        Pedido.create(
            { 
                produto, 
                parcelas, 
                valorUnitario, 
                comprador
            }
        ).then(result => {
            console.log('****** Pedido incluido!!');
            console.log(result);
            return result;
        })
        .catch(error => {
            console.log('****** Erro no cadastro de Pedido!!');
            console.log(error);
            return null;
        });
    },
    alterarPedido(_, { dados }){

        const { id, produto, parcelas, valorUnitario, comprador } = dados;

        Pedido.update(
            { produto, parcelas, valorUnitario, comprador },
            { where: { id } } 
          ).then( ret => {
            console.log('****** Pedido alterado!!');
        }).catch( error => {
            console.log('****** Erro ao alterar de Pedido!!');
        });

        return (
            Pedido.findAll({ where: { id }})
                .then(_ret => { return _ret[0].dataValues; })
            )
    },
    excluirPedido(_, { dados }){

        const { id } = dados;

        return Pedido.destroy({
                where: { id },
            }).then( ret => {
                console.log(ret)
                return ret > 0 ? `Registro de ID ${id} excluido` : `Registro de ID ${id} nao excluido`;
            });
    },
    
}