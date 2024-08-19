const { baralhos, flashcards } = require('../data')

function deletarBaralho(id){
    const index = baralhos.findIndex(baralho => baralho.id === id) 
    if(index !== -1){
        baralhos.splice(index, 1)
        flashcards.forEach((flashcard) => {
            const indexFlashcard = flashcards.findIndex(card => card.idBaralho === id) 
            if(indexFlashcard !== -1){
                flashcards.splice(indexFlashcard, 1)
            }
        })
    }   
}

module.exports = { deletarBaralho }