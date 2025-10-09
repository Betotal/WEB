 
 'use strict'

 function verificar(){
    let nascto = document.getElementById('txtano')
    let sexo = document.getElementsByName('radsex')
    let anoAtual = new Date().getFullYear()
    let divIdade = document.querySelector('div#divIdade')
    let img = null
    let idade = 0
    let genero = sexo[0].checked ? "homem": "mulher"
    
    if (Number(nascto.value) == 0 || Number(nascto.value) >= anoAtual){
        alert('[ERRO] Ano de nascimento não é válido')
        divIdade.style.textAlign = 'center'
        divIdade.innerHTML = `<p>Preencha os dados acima para ver a foto resultante</p>`
    } else {
        idade = anoAtual - Number(nascto.value)
        if (idade > 70){
            img = sexo[0].checked ? 'fotoIdosoM.png':'fotoIdodoF.png'
        } else if (idade > 60){
            img = sexo[0].checked ? 'fotoJIdosoM.png':'fotoJIdosoF.png'
        } else if (idade > 50){
            img = sexo[0].checked ? 'fotoMeiaIdadeM.png':'fotoMeiaIdadeF.png'
        } else if (idade > 40){
            img = sexo[0].checked ? 'fotoMaduroM.png':'fotoMaduroF.png'
        } else if (idade > 25){
            img = sexo[0].checked ? 'fotoAdultoM.png':'fotoAdultoF.png'
        } else if (idade > 18){
            img = sexo[0].checked ? 'fotoJovemM.png':'fotoJovemF.png'
        } else if (idade > 12){
            img = sexo[0].checked ? 'fotoAdolescenteM.png':'fotoAdolescenteF.png'
        } else if (idade > 3){
            img = sexo[0].checked ? 'fotoCriancaM.png':'fotoCriancaF.png'
        } else {
            img = sexo[0].checked ? 'fotoBebeM.png':'fotoBebeF.png'
        }
        divIdade.style.textAlign = 'center'
        divIdade.innerHTML = `Detectamos ${genero} com ${idade} anos`

        //  criando elemento pelo JS
        const imgElement = document.createElement('img')
        imgElement.setAttribute('id', 'foto')
        imgElement.setAttribute('src',`../../Imagens/${img}`)
        
        // adicionando o elemento criado na DIV
        divIdade.appendChild(imgElement)
    }

 }
 