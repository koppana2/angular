var D = /** @class */ (function () {
    function D() {
    }
    //mehod 
    D.prototype.prasu = function () {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
        console.log(this.d);
    };
    return D;
}());
var p2 = new D();
p2.a = 10;
p2.b = 200;
p2.c = "prasad";
p2.d = false;
p2.prasu();
