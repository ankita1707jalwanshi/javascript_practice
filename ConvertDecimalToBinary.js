// 9. Write a JavaScript program to convert a decimal number to binary.

var num = 11011;
var base = 1;
var result = 0;

var n = num;
while(n>0){
    var last_dig = n % 10;
    result = result + base * last_dig;
    base = base * 2;
    n = Math.floor(n/10);
}
console.log("The decimal value of " +num +" is: " + result);