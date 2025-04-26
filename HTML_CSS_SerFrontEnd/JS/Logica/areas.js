function calcularAreaRetangulo (largura, altura){
    try {
        validaNumero(largura)
    } catch (error) {
        return error
    }
    
    try {
        validaNumero(altura)
    } catch (error) {
        return error
    }

    return largura * altura
}

function calcularAreaTriangulo(largura,altura) {
    try {
        return calcularAreaRetangulo(largura,altura) / 2
    }catch(error){
        return error
    }
}

function calcularAreaCirculo(raio){
    try {
        validaNumero(raio)
    } catch (error) {
        return error
    }
    return Math.PI * (raio ** 2)
}

function validaNumero(valor) {
    if (typeof valor !== 'number'){
        throw new Error ("parametros não é do tipo 'typeof' = number!" )
    }
     return valor
}