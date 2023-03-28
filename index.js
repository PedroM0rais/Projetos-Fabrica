const numeros = [1, 2, 3, 4, 5,]
const numeros2 = [6, 7, 8, 9, 10]

const novoArray = numeros.concat(numeros2)

// const arrayCortado = novoArray.slice(0, 5)
// console.log(arrayCortado)

const encontrarNoArray = novoArray.findIndex((numero) => {
    return numero == 5
})

// console.log(encontrarNoArray)

// novoArray.forEach((elemento, indice,) => {
    // console.log(`Valor - ${elemento} / Índice - ${indice}`)
// })


// MAP
// const exemploMap = novoArray.map((item) => {
//     return item == 5 
// })
// console.log(exemploMap)
const usuarios = [
    {
        nome: 'Pedro',
        idade: 17, 
        profissao: 'Desenvolvedor Front-end',
        salario: 3500 

    },
    {
        nome: 'Fabio',
        idade: 25,
        profissao: 'Desenvolvidor Back-end', 
        salario: 5000
    },
    {
        nome: 'Jobson',
        idade: 35, 
        profissao: 'PO',
        salario: 8000
    }
]

// Filter
const filtrarUsuarios = usuarios.filter((usuario) => {
    let filtragem = usuario.salario >= 3500
    return(filtragem)
})

//console.log(filtrarUsuarios)

// REDUCE
const somarSalarios = usuarios.reduce((total, usuario) => {
    return total + usuario.salario
}, 0)

// console.log(somarSalarios.toLocaleString('pt-br', {
//     style: 'currency',
//     currency: 'BRL'
// }))

// OBJETOS

// const pessoas = {
//     nome: 'Pedro',
//     idade: 17,
//     hoobies: ['Jogar', 'Ver filmes', 'Estudar', 'Jogar Volêi'], 
//     caracteristicas: {
//         cabelo: 'ondulado', 
//         altura: 1.87,
//         peso: 81.0,
//     },
//     esta_viva: true
// }


// pessoas.idade = 18
// pessoas['esta_viva']

//console.log(pessoa)

// for(const pessoa in pessoas) {
//     console.log(pessoa)
// }

// DESESTRUTURAÇÂO DE OBJETOS E ARRAYS

const pessoa = {
         nome: 'Pedro',
         idade: 17,
         hoobies: ['Jogar', 'Ver filmes', 'Estudar', 'Jogar Volêi'], 
         caracteristicas: {
             cabelo: 'ondulado', 
             altura: 1.87,
             peso: 81.0,
            },
         esta_viva: true
     }

let { nome: nomePessoa } = pessoa
nomePessoa = 'Morais'

console.log(nomePessoa)
