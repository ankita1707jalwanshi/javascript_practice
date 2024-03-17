
// 11. Write a JavaScript program to find the greatest common divisor (GCD) of
// two positive integers.


var a=60;var b= 36; var gcd;
// Variable to store the Greatest Common Divisor (GCD)

// Iterative loop to find GCD using Euclidean algorithm
while(a!=b){
     // If 'a' is greater than 'b', subtract 'b' from 'a'
    if(a>b){
        a = a-b;
    }
     // If 'b' is greater than 'a', subtract 'a' from 'b'
    else{
        b= b-a;
    }
}
gcd = a;
console.log(gcd)
