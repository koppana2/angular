//converting string to number is not possible 
let d:unknown="hello";
console.log((<string>d).length)
console.log((d as string).length)