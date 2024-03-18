

// Write a JavaScript program to check if a given year is a leap year or not.
// Implement the solution using a while loop.
var year = 366*4;
while(year==366){
    year++;
    console.log("This is Leap_Year")
}
 if(year % 4 == 0){
    console.log("this is Lyear")
}
else{
    console.log("Non-LeapYear")
}