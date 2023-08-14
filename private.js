var E = /** @class */ (function () {
    function E() {
        this.a = 10;
        this.b = 300;
        this.c = "prasad";
        this.d = true;
    }
    //mehod 
    E.prototype.prasu = function () {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
        console.log(this.d);
    };
    return E;
}());
var p2 = new E();
p2.prasu();
