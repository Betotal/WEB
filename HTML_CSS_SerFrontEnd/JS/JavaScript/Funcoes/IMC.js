(function(){
    'use strict'
    function imc(peso, altura){
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
            return `${IMC.toFixed(3)} - Classificação: ${classificaImc(IMC)}`
            
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

    console.log(`Calculo do IMC: ${imc(92,179)}`)

})()
