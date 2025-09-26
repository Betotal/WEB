const calcRevealPattern = (function(){
    let n = 0

    function checkTypeNumber(n){
        if(typeof n !== "number"){
            throw TypeError("Valor não numérico");
        }
    }

    function somar(_n){
        checkTypeNumber(_n)
        n += _n
        return this
    }

    function subtrair (_n){
        checkTypeNumber(_n)
        n -= _n
        return this
    }

    function log(){
        console.log(n)
        return this
    }
    return {
        somar,
        subtrair,
        log
    }

})()

calcRevealPattern.somar(5).subtrair(10)
calcRevealPattern.log()