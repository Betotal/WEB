const teste = (function(){
    let n = 0
    return function testeInterno(){
    //    return "retorno teste"
        console.log("testeInterno chamado", ++n)
        return "retorno de testeInterno " + n
    }
})()

let str = teste()
teste()
teste()
let str2 = teste()
console.log(str)
console.log(str2)
