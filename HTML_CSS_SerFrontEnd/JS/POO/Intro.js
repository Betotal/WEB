function Animal (tipo){
    if (tipo) this.tipo = tipo
}
Animal.prototype.obterTipo = function (){
    return this.tipo
}

Animal.prototype.tipo = "Desconhecido"

let cachorro = new Animal("Mamifero")
let elefante = new Animal("Mamifero")
let cobra = new Animal("Reptil")
let sapo = new Animal("Alfibio")
let salmao = new Animal("Peixe")
let tiranossauro = new Animal()

//Array.prototype.map.call()   // executa a funcao map, de um objeto acima da minha variável/ objeto

console.log(cachorro.tipo)
console.log(elefante.tipo)
console.log(cobra.tipo)
console.log(sapo.tipo)
console.log(salmao.tipo)
console.log(tiranossauro.tipo)



