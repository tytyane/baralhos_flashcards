const { flashcards } = require('../data')

function atualizarFlashcard(id, novaPergunta, novaResposta){
    const index = flashcards.findIndex(flashcard => flashcard.id === id)
    let idBaralho = flashcards[index].idBaralho
    if(index !== -1){
        flashcards[index] = {id: id, pergunta: novaPergunta, resposta: novaResposta, idBaralho: idBaralho}
    }
}

module.exports = { atualizarFlashcard }