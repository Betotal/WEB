let total 

function somar(arr){
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];        
    }
    return total
}
// function somarArg(){
function somarArg(...args){
    total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];        
    }
    return total
}

console.log(somar([10,20,30]))

console.log(somarArg(11,21,31))