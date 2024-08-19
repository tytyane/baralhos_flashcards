const { flashcards } = require('../data')

function listarPorBaralho(idBaralho){
    flashcards.forEach((flashcard) => {
        if(idBaralho === flashcard.idBaralho){
            console.log(`ID: ${flashcard.id}
Pergunta: ${flashcard.pergunta}
Resposta: ${flashcard.resposta}
ID do baralho: ${flashcard.idBaralho}
            `)
        }
    })
}

module.exports = { listarPorBaralho }