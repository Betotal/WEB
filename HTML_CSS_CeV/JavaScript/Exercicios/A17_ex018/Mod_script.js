 
 'use strict'

let numeros = new Array()
let num = 0
let det = document.getElementById('detalhe')

function adicionar(){

   let num = Number(document.getElementById('txtnum').value)
   let select = document.getElementById('selnum')
   let erro = ""
   if (num <= 0 || num > 100){
      erro = 'Digite um número entre 1 e 100' 
   } else if (numeros.includes(num)){
      erro = `Número ${num} já esta na lista`
   } else {
      numeros.push(num)

      console.log(num)
      console.log(numeros)

      det.innerHTML = " "
      let opt = document.createElement('option')
      opt.setAttribute('value', `v${numeros.length}`)
      opt.textContent = `Valor adicionado: ${num}`
      select.appendChild(opt)

   }
   document.getElementById('txtnum').value = ' '
   document.getElementById('txtnum').focus()
   
   if (erro != ""){
      alert(erro)
      console.log(erro)
    }
 }

function finalizar(){
   if (numeros.length > 0){

      let texto = '<br>'
      numeros.sort()      
      
      // qtde de elementos em numeros
      texto = `Ao todo, temos ${numeros.length} números cadastrados.`
      det.innerHTML += `<p>${texto}</p>`
      
      // maior valor digitado em numeros
      texto = `O maior valor informado foi ${numeros[numeros.length - 1]}.`
      det.innerHTML += `<p>${texto}</p>`
      
      // menor valor digitado em numeros
      texto = `O menor valor informado foi ${numeros[0]}.`
      det.innerHTML += `<p>${texto}</p>`
      
      // soma dos elementos em numeros
      num = 0
      for (const element in numeros) {
         num += numeros[element]
      }
      texto = `Somando todos os valores, temos ${num}.`     
      det.innerHTML += `<p>${texto}</p>`

      // media dos valores em numeros
      texto = `A média dos valores digitados é ${(num / (numeros.length + 1)).toFixed(2)}.`
      det.innerHTML += `<p>${texto}</p>`
      
   } else {
      det.innerHTML = ""
      alert ("Nenhum número adicionado")
   }
}
 