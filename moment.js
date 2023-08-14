//import the module called "moment"
var moment=require('moment')
var date="2023-08-04"
var parsedate=moment(date,"YYYY-MM-DD");
//here format function will give the date in our own format
console.log(parsedate.format("MMMM Do YYYY"));// august 4th 2023
//we want to display the date and time as well
var datetime="2023-08-03 19:10:55 +5:30"
//parse the date using moment()
var parsedatetime=moment(datetime,"YYYY-MM-DD HH:mm:ss Z");
//displayt he date and time as august 8th 2023 7:10 pm
console.log(parsedatetime.format("MMMM Do YYYY h:mm A"));
