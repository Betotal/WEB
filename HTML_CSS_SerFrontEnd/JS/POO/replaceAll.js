if(!String.prototype.replaceAllJs){
    String.prototype.replaceAllJs = function (busca, troca){
    //    console.log(this)
    //    console.log(this.valueOf())
        if(!(busca instanceof RegExp || typeof busca === 'string')){
            throw Error ("1º parametro deve ser 'string'.")
        }
        if(!(troca instanceof RegExp || typeof troca === 'string')){
            throw Error ("2º parametro deve ser 'string'.")
        }
        return this.valueOf().split(busca).join(troca)
    }
}

console.log("teste de troca usando replaceAll".replaceAllJs("e", "x"))