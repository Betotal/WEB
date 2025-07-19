(function(){
    const nameUser = null;

    if (nameUser) {
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p>Bem vindo, <strong> ${nameUser} </strong> </p>`;

        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild)
    }
})()