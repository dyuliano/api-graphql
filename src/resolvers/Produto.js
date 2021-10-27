const { perfilList } = require("../data/db");

module.exports = {
    perfil(parms){
        const select = perfilList.filter(p => p.id === parms.perfil_id)
        return select ? select[0] : null
    }
}