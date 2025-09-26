function criarCachorro(name){
    let posicao = 0
    return {
        name,
        falar() {
            console.log(this.name, "esta latindo")
        },
        pegaPosicao(){
            return posicao
        },
        andar(distancia) {
            posicao += distancia
            console.log(this.name, "andou ", distancia, " metros")
        }
    }
}

const rex = criarCachorro("Rex")
rex.andar(10)
rex.andar(5)
console.log(rex.pegaPosicao())
console.log(rex)

const toto = criarCachorro("Toto")
toto.andar(20)
toto.andar(-5)
console.log(toto.pegaPosicao())
