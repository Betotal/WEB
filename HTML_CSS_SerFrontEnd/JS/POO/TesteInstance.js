n = 10
nObj = new Number(10)

console.log("n instance Number  ->", (n instanceof Number))
console.log("typeOf n = Number  ->", (typeof n === "number"))
console.log("nObj instance Number  ->", nObj instanceof Number)
console.log("n.constructor  ->", n.constructor)
console.log("nObj.constructor  ->", nObj.constructor)

const arr1 = []
const arr2 = new Array()

console.log("arr1 = [] -> instance Array", (arr1 instanceof Array))
console.log("arr2 = new Array() -> instance ArraytypeOf Number", (arr2 instanceof Array))


