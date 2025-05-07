function fn1(n1){
    return function (n2) {
        return n1 * n2
    }
}

const funcao = fn1(10)
console.log(funcao(3))

function fn3(){
    return function _fn3(){
        console.log("Função retornada por parametro")
    }
}

const funcao3 = fn3()
funcao3()