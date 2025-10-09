console.log('Vamos começar')

let cont = 1
let limite = 3
while (cont <= limite){
    console.log(`While: Tudo bem? ${cont}`)
    cont++
}
console.log(`While: Tudo bem? ${cont}`)

cont = 1
do {
    console.log(`DO While: Tudo bem? ${cont}`)
    cont++
} while (cont <= limite);

console.log(`DO While: Tudo bem? ${cont}`)

cont = 1
for (cont = 1; cont <= limite; cont++) {
    console.log(`FOR: Tudo bem? ${cont}`)    
}
console.log(`FOR: Tudo bem? ${cont}`)

console.log('Terminou!!')

