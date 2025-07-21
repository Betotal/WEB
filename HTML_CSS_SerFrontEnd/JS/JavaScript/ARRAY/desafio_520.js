    
    // ECMA SCRIPT 6.0
        // function sum(){
        //     let numeros = Array.from(arguments)
        //     let numeros1 = [...arguments]
        //    console.log(numeros)
        //    console.log(numeros1)
        //    console.log(numeros.reduce)
        //     return numeros.reduce(function(sum,atual){
        //         return sum + atual
        //     })
        // }

        // function averege(){
        //     return sum(...arguments) / arguments.length
        // }
        // let arr = [1,2,3,4,5,6]
        // let soma = sum(...arr)
        // console.log(soma)

        // let media = averege(...arr)
        // console.log(media)

    // ECMA SCRIPT 5.0
    function sum(){
        const numbers = []
        // for (let i = 0; i < arguments.length; i++) {
        //     numbers.push(arguments[i])
        // }
        
        Array.prototype.forEach.call(arguments,function(arguments){
            numbers.push(arguments)
        })
        return numbers.reduce(function(sum,atual){
            return sum + atual
        })
        console.log(numbers)
    }    

    function averege(){
        const soma = sum.apply(null,arguments)
        return soma / arguments.length

    }
    let arr = [1,2,3,4,5,6,7,8,9,10]
    console.log(sum(...arr))

    console.log(averege(...arr))
    // exempos de como chamar uma função
        //sum.call(null,2,4,6,8,10)
        //sum.apply(null,[1,3,5,7,9])

