const { baralhos } = require('../data')

function atualizarBaralho(id, baralhoAlterado){
    const index = baralhos.findIndex(baralho => baralho.id === id)
    if( index !== -1) {
        baralhos[index] = { id, baralhoAlterado}
    }
}

module.exports = { atualizarBaralho }