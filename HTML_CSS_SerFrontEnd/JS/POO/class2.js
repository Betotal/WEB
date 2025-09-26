function Animal (tipo){
    if (this instanceof Animal){
        if (tipo) this.tipo = tipo
//    } else {
//        throw new Error ("Animal deve ser crado pelo operador 'new'")
    }
}

function Cachorro (nome){
    this.nome = nome
    Animal.call(this, "Mamifero")
//    this.constructor = Cachorro
}
Cachorro.protorype = new Animal("Mamifero")
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog")
console.log(dog)

Animal.prototype.obterTipo = function (){
    return this.tipo
}

Animal.prototype.tipo = "Desconhecido"






//ES6 (2015)
class AnimalC{
    constructor(tipo){
        if (tipo){
            this.tipo = tipo
        }
    }
    obterTipo(){
        return this.tipo
    }
}


class GatoC extends AnimalC{ // extends, usado para herdar as funcoes 
    constructor(nome){
        super("Mamifero")
        this.nome = nome
    }
}

AnimalC.prototype.tipo = "DesconhecidoC"

let animal = new AnimalC("anfibio")
let picterodatilo = new AnimalC()

let mingal =new GatoC("mingal")

console.log(picterodatilo.tipo)

console.log(mingal)




