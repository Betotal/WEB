var name = "Teste "      // carrega no objeto global
let name2 = "Teste "

function teste (str, n){
    console.log(this)
    console.log(this.name)
    console.log(this.name2)
    console.log(str, n)
}

teste("string", 10)
teste.call({name: "Maria"}, "string", 10)
teste.apply({name: "João"}, [" da Silva", 32])
teste.call({name: "Fulano"}, ...[" de Tal", 52])

console.log("---------------------   bind -----------------")

const teste2 = teste.bind({nome: "Joana"})
teste2("Joaquina", 30)