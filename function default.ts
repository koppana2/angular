//creating the function  with default values 
function adds(a:number=10,b:number=20,c:number=30)
{
    return (a+b+c);
}
console.log(adds(100,200,300))//600
console.log(adds())//60