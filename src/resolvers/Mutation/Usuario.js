const { Usuario } = require("../../model/Usuario");

module.exports = {
    incluirUsuario(_, { dados }) { 
        Usuario.create(
            { 
                nome: dados.nome,
                email: dados.email,
                numeroContato: dados.numeroContato,
                status: dados.status,
            }
        ).then(result => {
            console.log('****** Usuario incluido!!');
            console.log(result);
            return result;
        })
        .catch(error => {
            console.log('****** Erro no cadastro de usuario!!');
            console.log(error);
            return null;
        });
    },
    alterarUsuario(_, { dados }){

        const { id, nome, email, numeroContato, perfil, status } = dados;

        Usuario.update(
            { nome, email, numeroContato, perfil, status },
            { where: { id } } 
          ).then( ret => {
            console.log('****** Usuario alterado!!');
        }).catch( error => {
            console.log('****** Erro ao alterar de usuario!!');
        });

        return (
            Usuario.findAll({ where: { id }})
                .then(_ret => { return _ret[0].dataValues; })
            )
    },
    excluirUsuario(_, { dados }){

        const { id } = dados;

        return Usuario.destroy({
                where: { id },
            }).then( ret => {
                console.log(ret)
                return ret > 0 ? `Registro de ID ${id} excluido` : `Registro de ID ${id} nao excluido`;
            });
    },
    
}