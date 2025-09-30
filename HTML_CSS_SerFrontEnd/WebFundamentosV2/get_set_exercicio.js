class Produto{
    #itensEstoque  // propriedade privada
    #contador      // propriedade privada

    constructor(nome, itensEstoque){
        this.nome = nome
        this.#contador = 0
        this.#itensEstoque = (typeof itensEstoque === "number" && itensEstoque > 0) ? itensEstoque : 0
    }

    get itensEstoque(){
        console.log (`Compras realizadas com sucesso de ${this.nome}: ${this.#contador}`)
        return this.#itensEstoque
    }

    comprar(quantidade){
        if(typeof quantidade !== "number" || quantidade <= 0){
            console.log("Quantidade inválida")
            return
        }
        if (quantidade > this.#itensEstoque){
            console.log("Estoque insuficiente")
            return
        }
        this.#contador++
        this.#itensEstoque -= quantidade
    }

    adicionarAoEstoque(quantidade){
        if (typeof quantidade === "number" && quantidade > 0){
            this.#itensEstoque += quantidade
        } else{
            console.log ("Quantidade inválida")
        }
    }
}

const caneta = new Produto("Caneta")
const camiseta = new Produto ("Camiseta", 10)

console.log(caneta)
console.log(camiseta)

caneta.adicionarAoEstoque(20)
caneta.comprar(25)
caneta.comprar(7)
console.log(caneta.itensEstoque)

camiseta.comprar(8)
camiseta.adicionarAoEstoque(-20)
camiseta