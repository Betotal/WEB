(function(){
    'use strict'
    function imc(peso, altura, _callback){
        try {
            if ((typeof peso !== 'number' || typeof altura !== 'number') || 
                (peso <= 0 || altura <= 0)){
                throw new Error("Peso/ Altura devem ser estritamente numeros positivos!");
                
            }
            let IMC
            IMC = peso / (altura ** 2).toFixed(3)
            if (altura > 100) {
                IMC = peso / ((altura / 100) ** 2)
            }

            if(typeof _callback === 'function'){
                return _callback(IMC)
            }
            return IMC
            
        } catch (error) {
          return error   
        }
    }

    function classificaImc(imc){
        switch (true) {
            case (imc < 18.5): return "Abaixo do peso adequado"
                               break;
            case (imc < 25)  : return "Peso adequado"
                               break;
            case (imc < 30)  : return "Sobrepeso"
                               break;
            case (imc < 35)  : return "Obesidade grau 1"
                               break;
            case (imc < 40)  : return "Obesidade grau 2"
                               break;
            default          : return "Obesidade extrema"
                               break;
        }
    }
    let imc1 = imc(92,179)
    let imc2 = imc(80,179, classificaImc)
    console.log(imc1)
    console.log(imc2)

})()
