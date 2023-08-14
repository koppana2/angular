var data=[1,2,4,5,6,7,8,9,20,40];
var evendata:number[]
//create the function
function givenEvendata(value,index)
{
    return value%2==0;
}
evendata=data.filter(givenEvendata);
console.log(evendata);