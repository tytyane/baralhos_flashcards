const { flashcards } = require('../data')

function criarFlashcard(id, pergunta, resposta){
    let idFlashcard = flashcards.length + 1
    flashcards.push({id: idFlashcard, pergunta: pergunta, resposta: resposta, idBaralho: id})
}

module.exports = { criarFlashcard }