function latir(){
    console.log(this.name, "fala: au au")
}

function miar (){
    console.log(this.name, "fala: miau")
}

const dog = {
    name: "cachorro",
//    falar: latir
//    falar: function(){
    falar(){
        console.log(this.name, "fala: au au")
    },
    falar2(){
        console.log(this.name, "Cachorro não fala")
    }
}
const cat = {
    name: "gato",
//    falar: miar
    falar() {
    //    miar()
        //console.log(this)
        //miar()
        console.log(this)
        miar.call(this)
    }
}

dog.falar()
cat.falar()

