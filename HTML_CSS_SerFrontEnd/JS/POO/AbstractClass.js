
class Animal {
    constructor(especie){   // se usar o operador new, sempre executara o construtor mesmo este não sendo explicito
        //console.log(this.constructor)
        if (this.constructor === "Animal"){   // classe abstrata
           throw new Error ("Animal é uma classe abstrata. Nâo pode ser implementada")
        }
        if(especie){
            this.especie = especie
        }
    }

    comer(){
        throw new Error ("Method 'comer' precisa ser implementado") // força que a classe que implementa 'comer'
    }
}

class Gato extends Animal{
    constructor(nome){
        super ("Mamifero")
        this.nome = nome
    }

    comer(){
        console.log(`${this.nome} esta comendo`)
    }

}

const animal = new Animal("Mamifero")
const gato = new Gato("Mingal")

console.log(gato)
console.log(gato.comer())