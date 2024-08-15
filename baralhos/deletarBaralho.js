const { baralhos } = require('../data')

function deletarBaralho(id){
    const index = baralhos.findIndex(baralho => baralho.id === id)
    if(index !== -1){
        baralhos.splice(index, 1)
    }
}

module.exports = { deletarBaralho }