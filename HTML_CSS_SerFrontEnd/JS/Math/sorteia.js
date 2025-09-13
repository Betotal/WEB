function gerarArrayNumero(min = 1, max = 9, inteiro = true) {
    const arr = new Array()
    do {
        let random = Math.random() * (max + 1);
        const numeroGerado = inteiro ? Math.floor(random) : random;
        if (numeroGerado >= min && numeroGerado <= max){ 
            if (!arr.includes(numeroGerado)) {
                arr.push(numeroGerado);
            }
        }

    } while (arr.length < (max - min + 1)); 
    return arr
}
function gerarNumero(min = 1, max = 9, inteiro = true) {
    let random = Math.random() * (max - min + 1) + min;
    return inteiro ? Math.floor(random) : random;
   }


console.log(gerarArrayNumero(1, 1));
console.log(gerarNumero(1, 5));
