var data=[1,2,3,4,5,6,7,8,9,10]
var data2:number[]=[]
data.forEach(function(value,index){
    //even index
    if(index%2==0)
    data2.push(value);
});
console.log(data2);