;(function () {
    'use strict'

    const seg = 1000
    const min = 60 * seg
    const hora = 60 * min
    const dia = 24 * hora

    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText
    console.log(dateEventDOM)    
    
    const p = document.createElement("p")
    document.querySelector(".hero-content").appendChild(p)

    function updateCountdown() {
         const dateEvent = getDate(dateEventDOM)
        let distancia = dateEvent.getTime() - (new Date())

        const diasFaltam = Math.floor(distancia / dia)
    
        distancia = distancia - diasFaltam * dia
        const horasFaltam = Math.floor(distancia / hora)

        distancia = distancia - horasFaltam * hora
        const minFaltam = Math.floor(distancia / min)

        distancia = distancia - minFaltam * min
        const segFaltam = Math.floor(distancia / 1000)
        
        addContagem(diasFaltam, horasFaltam, minFaltam, segFaltam )
    }

    function addContagem(day,hour,min, sec){
        p.textContent = `Contagem Regressiva: ${day} dias, ${hour} horas, ${min} minutos e ${sec} segundos.`
    }

    setInterval(updateCountdown, 1000)

    function getDate(str) {
        const [date, hour] = str.split(" ")
        const[day, month, year] = date.split("/")
        const[hor, min] = hour.split("H")


        return new Date(year, month - 1, day, hor, min)
    }

})();