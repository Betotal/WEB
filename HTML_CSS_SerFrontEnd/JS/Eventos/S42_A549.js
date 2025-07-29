(function (){
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")

    const formCadastro = document.querySelector(".formCadastro")
    
    
    //btn.addEventListener("click", function (e){  // click do botão
    formCadastro.addEventListener("submit", function(e){
    //    console.log(txtTitulo.value)
        if (!txtTitulo.value){
            showErrorMessage("Preencha todos os dados", function(){
                txtTitulo.focus()
            })
            e.preventDefault;
        }
    });

    /////////////////////////////////////////////////////
    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0] // só tenho 1
    const contadorMaxima = parseInt(txtDescricao.maxLength)
    mostrarNumero(contadorMaxima) 

    //contadorContainer.removeAttribute("style")
    contadorContainer.style.display = "block"
    
    txtDescricao.addEventListener("input", function(e){
        let caracterDigitados = this.value.length
        let caracterRestante = contadorMaxima - parseInt(caracterDigitados)
        mostrarNumero(caracterRestante) 
    });

    function mostrarNumero (n) {
        contadorContainer.textContent = n + ' caracteres'
    }
    //////////////////////////////////////////////////////////////

    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    });

    /////////////////////////////////////////////////////////////////

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMsgCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, callback){
        //alert(msg)
        feedbackMessage.classList.add("show") // adiciona uma classe no elemento  assim não sobrescreve se ja existir uma classe
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMsgCloseBtn.focus()

        function removeErrorMessage(){
            console.log("click close")
            feedbackMessage.classList.remove("show") // tira o ouvidor da lista
            feedbackMsgCloseBtn.removeEventListener("click", removeErrorMessage)
            feedbackMsgCloseBtn.removeEventListener("keyup", teclaTeclado)
            if (typeof callback === "function"){
                callback()
            }
        }

        function teclaTeclado(e){
            if (e.keycode === 27){
                removeErrorMessage()
            }
        }

        feedbackMsgCloseBtn.addEventListener("click", removeErrorMessage)

        feedbackMsgCloseBtn.addEventListener("keyup", teclaTeclado)

    };

})();