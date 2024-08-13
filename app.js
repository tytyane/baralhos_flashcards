const prompt = require('prompt-sync')()
const { baralhos } = require('./data')
const { criarBaralho } = require('./baralhos/criarBaralho')
const { listarBaralho } = require('./baralhos/listarBaralho')
const { atualizarBaralho } = require('./baralhos/atualizarBaralho')

menu()

function menu(){
    console.log(`
     ==========================================================
    |            FLASHCARD             |        BARALHO        |
    |==========================================================|  
    | 1. Criar novo flashcard          | 8. Criar novo baralho |
    | 2. Listar flashcards             | 9. Listar baralho     |
    | 3. Listar flashcards por baralho | 10. Atualizar baralho |
    | 4. Atualizar flashcard           | 11. Deletar baralho   |
    | 5. Deletar flashcard             |                       |
    | 6. Buscar flashcard por Pergunta |        0. SAIR        |
    | 7. Buscar flashcard por Baralho  |                       |
     ==========================================================

    `)
    let id
    let opcao = prompt('Digite uma opção: ')
    switch(opcao){
        case '1':
            break
        case '2':
            break
        case '3':
            break
        case '4':
            break
        case '5':
            break
        case '6':
            break
        case '7':
            break
        case '8':
            let baralho = prompt('Digite o título do baralho: ')
            criarBaralho(baralho)
            console.log('Baralho criado com sucesso!')
            menu()
            break
        case '9':
            console.log('Lista de baralhos: ')
            listarBaralho()
            menu()
            break
        case '10':
            listarBaralho()
            id = parseInt('Digite o ID do baralho que deseja atualizar: ')
            if(index > 0 && index <= baralhos.length){
                let baralhoAlterado = prompt('Digite o novo título do baralho: ')
                
            } else {
                console.log('Número inválido, tente novamente')
            }
            
            break
        case '11':
            break
        case '0':
            break
        default:
            console.log('Opss, essa opção não existe, tente novamente')
            menuBaralhoFlashcard()
    }
}