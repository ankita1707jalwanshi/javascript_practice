
// 4. Write a JavaScript program to find the sum of digits of a positive integer.

var i = 321
var sum = 0;

while(i>sum){
    var rem = i%10;
     sum = sum + rem;
     i = i/ 10;
// i++;
        }
        console.log(sum)