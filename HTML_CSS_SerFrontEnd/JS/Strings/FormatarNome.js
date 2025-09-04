;(function(){
    'use strict';

    //  Ver seção 45, do começo 
    
    // Jose                     >> Jose
    // Jose Reis                >> Reis, Jose
    // Jose Roberto dos Reis    >> Reis, Jose Roberto dos

    function formatarNome(nomeCompleto){
        nomeCompleto = nomeCompleto.trim()

        let str = nomeCompleto.lastIndexOf(" ")
        if (str > 0){
            return `${nomeCompleto.slice(str)}, ${nomeCompleto.slice(0,str)}`
        } else{
            return nomeCompleto;
        }
    }

    function formatarNomeArr(nomeCompleto){
        let nomeArray = nomeCompleto.split(" ")
        if (nomeArray.length === 1){
            return nomeCompleto
        }
        let primeiroNome = nomeArray.shift()
        return `${nomeArray.join(" ")}, ${primeiroNome}`
    }
    console.log(formatarNome("Jose Roberto dos Reis"))
    console.log(formatarNome("Jose Roberto"))
    console.log(formatarNome("Jose"))
    console.log("-------------------------------------")

    console.log(formatarNomeArr("Jose Roberto dos Reis"))
    console.log(formatarNomeArr("Jose Roberto"))
    console.log(formatarNomeArr("Jose"))

});