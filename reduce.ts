var data=[1,2,4,5,6,7,8,9,20,40];
var mydata:number
//create the function
mydata=data.reduce(function(a,b)
{
    //return value*10;
    return a+b;
});
console.log(mydata);
mydata=data.reduce(function(a,b)
{
    //return value*10;
    return a*b;
});
console.log(mydata);
mydata=data.reduce(function(a,b)
{
    //return value*10;
    return a-b;
});
console.log(mydata);
mydata=data.reduce(function(a,b)
{
    //return value*10;
    return a/b;
});
console.log(mydata);
mydata=data.reduce(function(a,b)
{
    //return value*10;
    return a%b;
});
console.log(mydata);
mydata=data.reduce(function(a,b)
{
    //return value*10;
    return a+b;
});
console.log(mydata/data.length);