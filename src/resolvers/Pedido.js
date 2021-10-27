const { usuariosList } = require("../data/db");

module.exports = {
    comprador(parms){
        const select = usuariosList.filter(p => p.id === parms.usuario_id)
        return select ? select[0] : null
    }
}