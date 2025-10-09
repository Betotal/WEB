
let num = [7,6,8,1,9,5]

//num.sort()

console.log(num)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição do array ${pos}, tem o valor ${num[pos]}`)
}

for (const ind in num) {
    console.log(`A posição ${ind} tem o valor ${num[ind]}`)
}
