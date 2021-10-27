const { Produto } = require("../../model/Produto");

module.exports = {
    incluirProduto(_, { dados }) { 

        const {  
            nome, descricao, imagem, unidadeMedida, peso, preco, quantidadeEstoque 
        } = dados;

        Produto.create(
            { 
                nome,
                descricao,
                imagem,
                unidadeMedida,
                peso,
                preco,
                quantidadeEstoque,
            }
        ).then(result => {
            console.log('****** Produto incluido!!');
            console.log(result);
            return result;
        })
        .catch(error => {
            console.log('****** Erro no cadastro de Produto!!');
            console.log(error);
            return null;
        });
    },
    alterarProduto(_, { dados }){

        const { 
            id, nome, descricao, imagem, unidadeMedida, peso, preco, quantidadeEstoque 
        } = dados;

        Produto.update(
            { nome, descricao, imagem, unidadeMedida, peso, preco, quantidadeEstoque },
            { where: { id } } 
          ).then( ret => {
            console.log('****** Produto alterado!!');
        }).catch( error => {
            console.log('****** Erro ao alterar de Produto!!');
        });

        return (
            Produto.findAll({ where: { id }})
                .then(_ret => { return _ret[0].dataValues; })
            )
    },
    excluirProduto(_, { dados }){

        const { id } = dados;

        return Produto.destroy({
                where: { id },
            }).then( ret => {
                console.log(ret)
                return ret > 0 ? `Registro de ID ${id} excluido` : `Registro de ID ${id} nao excluido`;
            });
    },
    
}