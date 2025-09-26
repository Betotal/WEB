function Cachorro(name){
    let posicao = 0
    this.name = name

    this.falar = function(){
        console.log(this.name, "esta latindo")
    }

    this.andar = function (distancia){
        posicao += distancia
        console.log(this.name, "andou", distancia, " metros")
        console.log("A posição atual é", posicao)
    }
    
}

const rex = new Cachorro("Rex")
rex.falar()
rex.andar(10)
rex.andar(2)
const toto = new Cachorro("toto")
