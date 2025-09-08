;(function () {
    'use strict'

    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(dateEventDOM)
    
    const dateEvent = getDate(dateEventDOM)

    let distancia = dateEvent.getTime() - (new Date())

    const seg = 1000
    const min = 60 * seg
    const hora = 60 * min
    const dia = 24 * hora
    
    const diasFaltam = Math.floor(distancia / dia)
    
    distancia = distancia - diasFaltam * dia
    const horasFaltam = Math.floor(distancia / hora)

    distancia = distancia - horasFaltam * hora
    const minFaltam = Math.floor(distancia / min)

    distancia = distancia - minFaltam * min

    const segFaltam = Math.floor(distancia / 1000)
    addContagem(diasFaltam, horasFaltam, minFaltam, segFaltam )

    function addContagem(day,hour,min, sec){
        const p = document.createElement("p")
        p.textContent = `Contagem Regressiva: ${day} dias, ${hour} horas, ${min} e ${sec} segundos.`
        document.querySelector(".hero-content").appendChild(p)
    }

    function getDate(str) {
        const [date, hour] = str.split(" ")
        const[day, month, year] = date.split("/")
        const[hor, min] = hour.split("H")


        return new Date(year, month - 1, day, hor, min)
    }

})();