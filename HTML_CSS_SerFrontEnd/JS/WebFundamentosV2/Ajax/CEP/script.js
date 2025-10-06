const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");
const dialog = document.getElementById("erro-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");

/* ***
No vídeo eu errei o id "fechar-dialog", mas depois corrigi. Nesse arquivo a const fecharDialogBtn já está correta

*/

// Escuta o evento input em cepInput
cepInput.addEventListener("input", function(){
    let cep = this.value
    
    cep = cep.replace("-", "").trim()
    if (cep.length === 8){
        obterEndereco(cep)
            .then(dado => {
            //    console.log(dado)
                if (dado.erro){
                    throw Error("CEP inválido");                
                }
                mostrarDados(dado)
            })
            .catch(e => {
                //console.log(e)
                monstrarErro(e)
                limparDados()
            })
    }
})

function obterEndereco(cep){
    console.log(`https://viacep.com.br/ws/${cep}/json/`)
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => {
            if (!resposta.ok){
                throw Error(`Erro ao buscar CEP: ${cep}`)
            }
            return resposta.json()
        })
}

function mostrarDados(dado){
    logradouroInput.value = dado.logradouro || ""
    bairroInput.value = dado.bairro || ""
    localidadeInput.value = dado.localidade || ""
    ufInput.value = dado.uf || ""
}

function limparDados(){
    logradouroInput.value = ""
    bairroInput.value = ""
    localidadeInput.value = ""
    ufInput.value = ""
}

function monstrarErro(erro){
    dialog.showModal()
}

fecharDialogBtn.addEventListener("click", function(){
    dialog.close()
})

