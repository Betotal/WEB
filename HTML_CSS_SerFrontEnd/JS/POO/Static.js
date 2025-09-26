
// ES5

function Animal(){

}

Animal.prototype.QuemSouEu = function(){
    return this
}

Animal.categoria = "Ser vivo"

const dog = new Animal()

console.log(Animal.categoria)
console.log(dog.categoria)
console.log(Animal.QuemSouEu)
console.log(dog.QuemSouEu)


//ES6
class Cachorro{
    constructor(nome){
        this.nome = nome
        console.log("metodo statico dentro do construtor")
        Cachorro.beber()
    }

    static comer(){
        console.log(this)  // propria instancia, o proprio objeto
        console.log("comendo")
        this.beber()   // dentro do objeto, outro metodo estatico pode ser chamado
    }

    static beber(){
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("rex")