(function(){
    const nameUser = null;
    //    document.querySelector(".top-bar p").textContent += nameUser
    const element = document.querySelector(".top-bar p");

    if (nameUser) {
  //  element.textContent += nameUser
        element.innerHTML += "<strong>" + nameUser + "</strong>"
    } else {
        //element.style.display = "none" 
        //element.parentElement.style.display = "none"
        const removerElemento = element.parentElement
        removerElemento.parentElement.removeChild(removerElemento)

        //element.remove()  // remove o elemento do DOM
    }

})()