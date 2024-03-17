
// 5. Write a JavaScript program to find the sum of odd numbers from 1 to 50.

var num = 1;
var i = 2;
var ans=0;
while(num>=50){
    ans = ans + num
    i++;
}
if(num % i != 0){
    console.log("it is even")
}
else{
    console.log("it is not an even")
}