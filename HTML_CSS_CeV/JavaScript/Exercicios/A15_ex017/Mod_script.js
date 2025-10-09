 
 'use strict'

 function gerarTabuada(){
    let num = Number(document.getElementById('txtnumero').value)
    let tabuada = document.getElementById('seltab')

    if (Number.isNaN(num) || num == 0){
        alert('Digite um número')
    } else{
        let c = 1
        tabuada.innerHTML = ""
        do{
            let item = document.createElement('option')
            
            item.setAttribute('value', `v${c}`)
            item.text = `${num} x ${c} = ${num * c}`
            tabuada.appendChild(item)
            c++


        } while (c <= 10)
    }

 }
 