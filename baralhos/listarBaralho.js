const { baralhos } = require('../data')

function listarBaralho(){
    baralhos.forEach((baralho) =>
    console.log(`Título: ${baralho.titulo}
ID: ${baralho.id}
`))
}

module.exports = { listarBaralho }