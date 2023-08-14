class C{
    a:number;
    b:number;
    c:string;
    d:boolean;
 //mehod 
 prasu():void{
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
    console.log(this.d);
 }
}
let p2=new C();
p2.a=10;
p2.b=200;
p2.c="prasad";
p2.d=false;
p2.prasu()