const { flashcards } = require('../data')

function deletarFlashcard(id){
    const index = flashcards.findIndex(flashcard => flashcard.id === id)
    if(index !== -1){
        flashcards.splice(index, 1)
    }
}

module.exports = { deletarFlashcard }