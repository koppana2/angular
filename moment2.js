//import the module called "moment"
var moment=require('moment')
var datetime="2023-08-04 19:39:40"
//display the date like 2023/08/04 at 19 30
var formatdate=moment(datetime,"YYYY-MM-DD HH:mm:ss").format("YYYY/MM/DD [at] HH:mm")
console.log(formatdate)
var date="2023-08-04"
var formatday=moment(date,"YYYY-MM-DD").format("dddd");
console.log(formatday);//friday

