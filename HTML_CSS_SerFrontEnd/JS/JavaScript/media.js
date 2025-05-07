(function(){
    'use strict'
    function media(...args){
        let qtde = 0
        let erro = 0
        let mediaNumerica = 0
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') {
            //    throw Error ("Só serão aceitos numeros")
                erro++
            } else {
                mediaNumerica += arguments[i];
                qtde++        
            }
        }
        console.log(`soma: ${mediaNumerica}`)
        console.log(`Qtde de elementos: ${arguments.length}`)
        console.log(`Erros encontrados: ${erro}`)
        if (mediaNumerica == 0) {
            return 0
        }
        return (mediaNumerica / qtde).toFixed(2)
    }

    console.log (`media: ${media('ewrte', 'rwerw', true)}`)
})()