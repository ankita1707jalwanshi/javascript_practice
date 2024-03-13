// Write code that determines if a given year is a leap year and logs the result.

var year = 366*4;
if(year % 4 == 0){
    console.log("This is Leap_Year")
}
else if(year % 100 == 0){
    console.log("this is Lyear")
}
else{
    console.log("Non-LeapYear")
}