 
 'use strict'

 function carregar(){
    let msg  = document.getElementById('msg')
    let foto = document.getElementById('foto')
    let img  = document.getElementById('img')
    let corpo= document.getElementById('corpo')

    const data = new Date()
    let hora = data.getHours()
    let min  = data.getMinutes()

    //hora = 11
    msg.innerHTML = `Agora são ${hora}:${min}`

    if (hora > 0 && hora <= 12){
        img.src = '../../imagens/fotomanha.png'
        corpo.style.background = '#faf7cbff'
    } else if(hora > 18){
        img.src = '../../imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }else{
        img.src = '../../imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    }
 }

 