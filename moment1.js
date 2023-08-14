//import the module called "moment"
var moment=require('moment')
var date="2023-08-08"
//format the date as August 8th 2023 
var formatdate=moment(date,"YYYY-MM-DD").format("MMMM Do YYYY");
console.log(formatdate);
//format the time
var time="15:10:55"
var formattime=moment(time,"HH:mm:ss").format("h:mm A");
console.log(formattime);
//relative time formatting using moment
var date="2023-07-31"
var formatrelativedate=moment(date,"YYYY-MM-DD").fromNow();
console.log(formatrelativedate);// "5" days ago

