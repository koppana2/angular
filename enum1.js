// let create the enum 
var Days1;
(function (Days1) {
    Days1[Days1["MON"] = 100] = "MON";
    Days1[Days1["TUE"] = 200] = "TUE";
    Days1[Days1["WED"] = 300] = "WED";
    Days1[Days1["THU"] = 500] = "THU";
    Days1[Days1["FRI"] = 600] = "FRI";
    Days1[Days1["SAT"] = 7000] = "SAT";
    Days1[Days1["SUN"] = 1000] = "SUN";
})(Days1 || (Days1 = {}));
console.log(Days1.MON); //100
console.log(Days1.TUE); //200
console.log(Days1.WED); //300
console.log(Days1.THU); //500
console.log(Days1.FRI); //600
console.log(Days1.SAT); //700
console.log(Days1.SUN); //1000
