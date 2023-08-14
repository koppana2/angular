class D{
   public a:number;
   public  b:number;
   public  c:string;
   public d:boolean;
 //mehod 
 public prasu():void{
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
    console.log(this.d);
 }
}
let p2=new D();
p2.a=10;
p2.b=200;
p2.c="prasad";
p2.d=false;
p2.prasu()