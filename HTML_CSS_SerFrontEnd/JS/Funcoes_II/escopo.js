const str = "String global"

const teste2 = () => {
    console.log("arrow function")
    console.log(this)
}

function teste(str){
    console.log("------------   this do objeto")
    console.log(this)  //this dinâmico. Quem chama a função
    console.log(str)

    setTimeout(function() {   //sofre alteração por conta do objeto que faz a chamada
        console.log("------------ sofre aletração na chamada")  
        console.log(this)
    }, 2000)

    setTimeout(() => {    //não sofre alteração
        console.log("------------ não sofre alteração")
        console.log(this)
    }, 2000)


}

teste()

const obj = {
    foo: "bar",
    teste,
    teste2
}

obj.teste()
//obj.teste2()

