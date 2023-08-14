interface vechicle
{
    brand:string,type:string,color:string
}
interface fuelType extends vechicle
{
    fuelType:string
}
interface bike extends fuelType
{
    milage:string
}
let bike={brand:"hero",type:" 2 wheeler ",color:"red"}
console.log(bike);
console.log(bike.brand);
console.log(bike.type);
