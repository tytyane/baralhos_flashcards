const { baralhos } = require('../data')

function criarBaralho(baralho){
    baralho.id = baralhos.length + 1
    baralhos.push(baralho)
}

module.exports = {criarBaralho}