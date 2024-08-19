const { flashcards } = require('../data')

function buscarPorPergunta(pergunta){
    flashcards.forEach((flashcard) => {
        if(pergunta == flashcard.pergunta){
            console.log(`ID: ${flashcard.id}
Pergunta: ${flashcard.pergunta}
Resposta: ${flashcard.resposta}
ID do baralho: ${flashcard.idBaralho}
`)
        } 
    })
        
}

module.exports = { buscarPorPergunta }