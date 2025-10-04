class Carrinho{
    #produtos

    constructor(){
        this.#produtos = []
    }

    adicionar(produto){
        this.#produtos.push(produto)
    }

    get produtos(){
    //    return this.#produtos  retorna a referencia
       return [...this.#produtos]   // retorna uma copia da propriedade privada.
                                    // a propriedade fica protegida
    }
}

const carrinho = new Carrinho()

carrinho.adicionar("caneta")
carrinho.adicionar("borracha")
console.log(carrinho.produtos)
carrinho.adicionar("lapis")
console.log(carrinho.produtos)

const refCarrinho = carrinho.produtos  //antes da anteração carregava o endereço em memoria 
console.log(refCarrinho)
refCarrinho.push("apontador")          //antes da alteração poderia alterar a carrinho
console.log(carrinho.produtos)
refCarrinho.length = 0
console.log(carrinho.produtos)