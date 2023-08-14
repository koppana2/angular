var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var F = /** @class */ (function () {
    function F() {
        this.a = 10;
        this.b = 300;
        this.c = "prasad";
        this.d = true;
    }
    return F;
}());
//mehod 
var G = /** @class */ (function (_super) {
    __extends(G, _super);
    function G() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a1 = [1, 2, 3, 4];
        return _this;
    }
    G.prototype.prasu = function () {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
        console.log(this.d);
    };
    return G;
}(F));
var p2 = new G();
p2.prasu();
