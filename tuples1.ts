//tuple means "array with fixed size"
// readonly only for ready arry size of the object 
let t=[1,2,3,4,5,6,7]
console.log(t)
let t5: readonly[number,string,boolean]=[10,"hiee",true]
console.log(t5)
let t3: readonly[number,string,boolean]=[10,"hiee",true]
console.log(t3)
let [x,y,z]=t2;
console.log(x);
console.log(y);
console.log(z);