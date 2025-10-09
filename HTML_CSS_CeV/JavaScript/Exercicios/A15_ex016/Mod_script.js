 
 'use strict'

 function contar(){
    let inicio = Number(document.getElementById('txtinicio').value)
    let fim    = Number(document.getElementById('txtfim').value)
    let passo  = Number(document.getElementById('txtpasso').value)
    let contagem = document.getElementById('txtcontagem')

    let texto = `\u{1F6A9} `

    if (Number.isNaN(inicio)){
        alert('"Inicio" não é um número')
        contagem.textContent = 'Preparando contagem ...'
    } else if (Number.isNaN(fim)){
        alert('"Fim" não é um número')
        contagem.textContent = 'Preparando contagem ...'
    } else if (Number.isNaN(passo)){
        alert('"Passso" não é um número')
        contagem.textContent = 'Preparando contagem ...'
    } else if (fim == inicio){
        alert('"Fim" deve ser diferente do "Início"')
        contagem.textContent = 'Preparando contagem ...'
    } else if (passo <= 0){
        alert('"Passo" deve ser maior que 0 (zero)')
        contagem.textContent = 'Preparando contagem ...'
    } else {
        if (fim > inicio){
            for (let i = inicio; i <= fim; i += passo) {
                texto += i.toString() 
                if ((i + passo) <= fim){
                    texto += ` \u{27A1}`
                }
            }
        } else {
            for (let i = inicio; i >= fim; i -= passo) {
                texto += i.toString() 
                if ((i - passo) >= fim){
                    texto += ` \u{27A1}`
                }
            }

        }

        texto += ` \u{1F3C1}`

        contagem.innerHTML = `<p>Contando ... <br> ${texto}`
    }
 }
 