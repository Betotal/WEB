//(function () {  //funcao autoinvocavel

//})()

const msgFeedback = document.getElementById("newsletterFeedback")
const txtEmail = document.getElementById("txtEmail")

function cadastrarEmail() {
    let email = txtEmail.value
    if (email){
        msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`
    }else{
        msgFeedback.innerHTML = `Informe um e-mail válido!`
    }
}

function editarEmail() {
    txtEmail.disabled = false
    msgFeedback.textContent = " "
    txtEmail.focus()
}

function desabilitaEmail(){
    txtEmail.disabled = true
}