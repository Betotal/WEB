function testeFunction(str){
    return "fn expression - " + str
}
////const testeArrow = (str) => {
const testeArrow = str => {
    return "fn Arrow - " + str
}

const testeArrow2 = str => "fn Arrow2 - " + str

const testeArrow3 = (str, n) => "fn Arrow3 - " + str + " - " + n

const testeArrow4 = () => {
    return { foo: "bar" }    // {} objeto
}

const testeArrow4_2 = () => ({ foo: "bar" })

let texto = "Aula (638) de Arrwon function"

let t1 = testeFunction(texto)
console.log(t1)

t1 = testeArrow(texto)
console.log(t1)

t1 = testeArrow2(texto)
console.log(t1)

t1 = testeArrow3(texto, 10)
console.log(t1)

console.log ("fn Arrow4")

t1 = testeArrow4()
console.log(t1)
console.log(t1.foo)
console.log(t1["foo"])

t1 = testeArrow4_2()
console.log(t1)
console.log(t1.foo)
console.log(t1["foo"])

