var data=[1,2,4,5,6,7,8,9,20,40];
var maps:number[]
//create the function
data=data.map (function(value,index)
{
    //return value*10;
    return value+100;
});
console.log(data);