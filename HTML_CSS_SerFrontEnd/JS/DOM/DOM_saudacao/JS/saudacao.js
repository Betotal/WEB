(function(){
    const userName = prompt("Por favor digite seu nome: ")
    //    document.querySelector(".top-bar p").textContent = `Bem vindo(a), ${userName}`
    const elemento = document.querySelector(".top-bar p")


    if (userName){
    //    elemento.textContent = `Bem vindo(a), ${userName}`
    //    elemento.textContent += `${userName}`   //  somante usar o texto
    elemento.innerHTML += `<strong>${userName} </strong>` // para usar tags
    } else {
        elemento.textContent = "Por favor informe seu nome. "
    //    elemento.style.display = "none"   // inserindo código css
    //  elemento.parentElement.style.display = "none"  // elemento pai
        let paiElemento = elemento.parentElement   // elemento pai
        paiElemento.children   // filhos do elemento pai                           
    }
})()