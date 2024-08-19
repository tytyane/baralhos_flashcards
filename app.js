const prompt = require('prompt-sync')()
const { baralhos, flashcards } = require('./data')
const { criarBaralho } = require('./baralhos/criarBaralho')
const { listarBaralho } = require('./baralhos/listarBaralho')
const { atualizarBaralho } = require('./baralhos/atualizarBaralho')
const { deletarBaralho } = require('./baralhos/deletarBaralho')
const { criarFlashcard } =require('./flashcards/criarFlashcard')
const { listarFlashcard } = require('./flashcards/listarFlashcard')
const { atualizarFlashcard } = require('./flashcards/atualizarFlashcard')
const { deletarFlashcard } = require('./flashcards/deletarFlashcard')
const { listarPorBaralho } = require('./flashcards/listarPorBaralho')
const { buscarPorPergunta } = require('./flashcards/buscarPorPergunta')

menu()

function menu(){
    console.log(`
     ==========================================================
    |            FLASHCARD             |        BARALHO        |
    |==========================================================|  
    | 1. Criar novo flashcard          | 7. Criar novo baralho |
    | 2. Listar flashcards             | 8. Listar baralho     |
    | 3. Listar flashcards por baralho | 9. Atualizar baralho  |
    | 4. Atualizar flashcard           | 10. Deletar baralho   |
    | 5. Deletar flashcard             |                       |
    | 6. Buscar flashcard por Pergunta |        0. SAIR        |
     ==========================================================

    `)
    let id
    let opcao = prompt('Digite uma opção: ')
    switch(opcao){
        case '1':
            listarBaralho()
            id = parseInt(prompt('Digite em qual baralho quer criar o novo Flashcard: '))
            if(id > 0 && id <= baralhos.length){
                let pergunta = prompt('Digite a pergunta do Flashcard: ')
                let resposta = prompt('Digite a resposta: ')
                criarFlashcard(id, pergunta, resposta)
                console.log('Flashcard criado com sucesso!')
            } else {
                console.log('Número inválido, tente novamente')
            }
            menu()
            break
        case '2':
            console.log('Lista de Flashcards: ')
            listarFlashcard()
            menu()
            break
        case '3':
            listarBaralho()
            id = parseInt(prompt('Digite o ID do baralho que deseja ver os Flashcards: '))
            if(id > 0 && id <= baralhos.length){
                console.log(`Lista de Flashcards do baralho ${id}`)
                listarPorBaralho(id)
            } else {
                console.log('Número inválido, tente novamente')
            }
            menu()
            break
        case '4':
            listarFlashcard()
            id = parseInt(prompt('Digite o ID do flashcard que deseja atualizar: '))
            if(id > 0 && id <= flashcards.length){
                let novaPergunta = prompt('Digite a nova pergunta: ')
                let novaResposta = prompt('Digite a nova resposta: ')
                atualizarFlashcard(id, novaPergunta, novaResposta)
                console.log('Flashcard atualizado com sucesso!')
            } else {
                console.log('Número inválido, tente novamente')
            }
            menu()
            break
        case '5':
            listarFlashcard()
            id = parseInt(prompt('Digite o ID do flashcard que deseja deletar: '))
            if(id > 0 && id <= flashcards.length){
                deletarFlashcard(id)
                console.log('Flashcard deletado com sucesso!')
            } else {
                console.log('Número inválido, tente novamente')
            }
            menu()
            break
        case '6':
            let pergunta = prompt('Digite a pergunta para buscar o Flashcard: ')
            const pertence = flashcards.includes(flashcard => flashcard.pergunta === pergunta)
            if(pertence == true){
                buscarPorPergunta(pergunta)
            } else {
                console.log('Pergunta não encontrada, tente novamente')
            }
            menu()
            break
        case '7':
            let baralho = prompt('Digite o título do baralho: ')
            criarBaralho(baralho)
            console.log('Baralho criado com sucesso!')
            menu()
            break
        case '8':
            console.log('Lista de Baralhos: ')
            listarBaralho()
            menu()
            break
        case '9':
            listarBaralho()
            id = parseInt(prompt('Digite o ID do baralho que deseja atualizar: '))
            if(id > 0 && id <= baralhos.length){
                let baralhoAlterado = prompt('Digite o novo título do baralho: ')
                atualizarBaralho(id, baralhoAlterado)
                console.log('Baralho atualizado com sucesso!')
            } else {
                console.log('Número inválido, tente novamente')
            }
            menu()
            break
        case '10':
            listarBaralho()
            id = parseInt(prompt('Digite o ID do baralho que deseja deletar: '))
            if(id > 0 && id <= baralhos.length){
                deletarBaralho(id)
                console.log('O baralho e seus flashcards foram deletados com sucesso!')
            } else {
                console.log('Número inválido, tente novamente')
            }
            menu()
            break
        case '0':
            console.log('Até logo...')
            break
        default:
            console.log('Opss, essa opção não existe, tente novamente')
            menu()
    }
}