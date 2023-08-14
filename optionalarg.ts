//creating the function with optional arguments  
function add(a:number,b:number,c?:number):number
{
    return a+b+(c||0);
}
console.log(add(10,20))//30
console.log(add(10,20,40))//70