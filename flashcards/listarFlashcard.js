const { flashcards } = require('../data')

function listarFlashcard(){
    flashcards.forEach((flashcard) => {
        console.log(`ID: ${flashcard.id}
Pergunta: ${flashcard.pergunta}
Resposta: ${flashcard.resposta}
ID do baralho: ${flashcard.idBaralho}
`)
    })
}

module.exports = { listarFlashcard }