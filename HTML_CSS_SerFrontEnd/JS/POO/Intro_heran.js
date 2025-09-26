function Animal (tipo){
    if (tipo) this.tipo = tipo
}
Animal.prototype.obterTipo = function (){
    return this.tipo
}

Animal.prototype.tipo = "Desconhecido"

function Cachorro(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
//    this.constructor = Cachorro
    Object.defineProperty(Cachorro.prototype, "constructor",{
        value:Cachorro,
        enumerable: false
    })
}

// herança
Cachorro.prototype = new Animal() // Vincular o prototipo do objeto Cachorro com objeto Animal
                                  // Com isso o obejto Cachorro, será um Animal

let rex = new Cachorro("Rex", "Mamifero")

console.log(rex)

for (let prop in rex){
    if (rex.hasOwnProperty(prop)){
        console.log(prop)
    }
}

console.log(rex instanceof Animal)  // intanceof verifica na cadeia de protótipo (prototype)
console.log(Cachorro.prototype.isPrototypeOf(rex))
console.log(Object.prototype.isPrototypeOf(rex))
console.log(Object.getPrototypeOf(rex))
console.log(rex.__proto__)

