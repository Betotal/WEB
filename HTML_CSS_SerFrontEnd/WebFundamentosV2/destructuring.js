
const arr = [1, 2, 3, 4]

// com destructuring
// const [n1, n3] = arr

// sem destructuring
// const n2 = arr [1]
// const n4 = arr [3]

const pessoa = {nome: "Jose", sobrenome: 'Reis', empresa: "Blabla"}
const pessoa2 = {nome: "Pedro", sobrenome: 'Bó', idade: 25}
// sem destructuring
// let empresa = pessoa.empresa
// let sobrenome = pessoa.nome

// com destructuring
let {nome: newName, empresa: newCompany, idade = null} = pessoa
// o uso do ":", atribui um novo nome para prorpiedade

console.log(newName)
console.log(newCompany)

const {nome: nome2, ...resto} = pessoa2
console.log(nome2)
console.log(resto)

function dizOla({nome, sobrenome}){
    return `Ola ${nome} ${sobrenome}, tudo bem?`
}
console.log(dizOla({nome: "Jurema", sobrenome: "Arruda", idade: 40}))

const pessoa3 = {nome: "Teste", idade: 30}

console.log(dizOla(pessoa3))