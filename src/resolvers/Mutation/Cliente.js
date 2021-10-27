const { Cliente } = require("../../model/Cliente");

module.exports = {
    incluirCliente(_, { dados }) { 

        const { nomeCompleto, numeroContato, email, cpf, dataNascimento } = dados;

        Cliente.create(
            { 
                nomeCompleto, 
                numeroContato, 
                email, 
                cpf, 
                dataNascimento
            }
        ).then(result => {
            console.log('****** Cliente incluido!!');
            console.log(result);
            return result;
        })
        .catch(error => {
            console.log('****** Erro no cadastro de Cliente!!');
            console.log(error);
            return null;
        });
    },
    alterarCliente(_, { dados }){

        const { id, nomeCompleto, numeroContato, email, cpf, dataNascimento } = dados;

        Cliente.update(
            { nomeCompleto, numeroContato, email, cpf, dataNascimento },
            { where: { id } } 
          ).then( ret => {
            console.log('****** Cliente alterado!!');
        }).catch( error => {
            console.log('****** Erro ao alterar de Cliente!!');
        });

        return (
            Cliente.findAll({ where: { id }})
                .then(_ret => { return _ret[0].dataValues; })
            )
    },
    excluirCliente(_, { dados }){

        const { id } = dados;

        return Cliente.destroy({
                where: { id },
            }).then( ret => {
                console.log(ret)
                return ret > 0 ? `Registro de ID ${id} excluido` : `Registro de ID ${id} nao excluido`;
            });
    },
    
}