const arr = [1,5,10,"ola", true, 10]

let soNumeros = arr.every(function(el){
    // retorna true se todos os ele4mentos do array forem true
//    console.log(el)
    return typeof el === "number" 
})
console.log("Every: " + soNumeros)

soNumeros = arr.some(function(el){
    // retorna true se pelo menos 1 elemento do array fore true
//    console.log(el)
    return typeof el === "number" 
})
console.log("Some: " + soNumeros)

let arr1 = arr.filter(function(el, i){
    // retorna para variável, os elemnteso se a condição for verdadeira
    return typeof(el) === "number"
})
console.log("Filter: " + arr)
console.log("Filter: " + arr1)

arr.forEach(function(el, i){
    // Não tem retorno. Somente faz iteração com os elementos do array
    return typeof(el) === "number"
})
console.log("ForEach")

arr2 = arr1.map(function(el, i){
    // Alterar diretamente o elemento da array
    return el * el
})
console.log("Map: " + arr)
console.log("Map: " + arr1)
console.log("Map: " + arr2)

console.log("indexOf: " + arr.indexOf(10))
console.log("lastindexOf: " + arr.lastIndexOf(10))

console.log("----------------------------------------------------------------------------------")

// arr = [1,2,3,4,5,6,7]
// //console.log(arr.reverse())

// const soma = arr.reduce(function(acumulador, atual, i){
//     console.log(`indice: ${i++} --- acumulador: ${acumulador} --- atual: ${atual}`)
//     return acumulador + atual
// }, 0)
// console.log(soma)
// console.log("----------------------------------------------------------------------------------")

// const nomes = ['Anita', 'Pedro', 'Helena', 'Priscila', 'Aneida', 'Maisa', 'Beto', 'Heitor', 'Marcos Antonio', 'Julia', 'Katia', 'Ronaldo', 'Silvio']
// let nomesPorLetra = nomes.reduce(function(_nomes,nomeAtual){
//                         // parametros: objeto e o elmento do array
//     let primeiraLetra = nomeAtual[0]
//     if (_nomes[primeiraLetra]){  //nomes.primeiraLetra existe
//         _nomes[primeiraLetra]++
//     } else {
//         _nomes[primeiraLetra] = 1
//     }
//     return _nomes

// }, {})  //passando objeto como retorno (call back)

// console.log(nomesPorLetra)
// console.log("----------------------------------------------------------------------------------")

// const numeros = [1,2,5,3,9,2,1,5,3,5,4,3,8,1,2,6,4,5,3,8,9,10,7]
// const numerosUnicos = numeros.reduce(function(_numeros, numAtual){
//     if (_numeros.indexOf(numAtual) < 0){
//         _numeros.push(numAtual)
//     }
//     return _numeros
// },[])

// console.log(numerosUnicos)

