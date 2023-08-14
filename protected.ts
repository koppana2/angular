class F{
    protected a:number=10;
    protected  b:number=300;
    protected  c:string="prasad";
    protected d:boolean=true;
}
  //mehod 
  class G extends F
  { 
    a1:number[]=[1,2,3,4];
   prasu():void{
     console.log(this.a);
     console.log(this.b);
     console.log(this.c);
     console.log(this.d);
  }
}
 
 let p2=new G();
 p2.prasu()