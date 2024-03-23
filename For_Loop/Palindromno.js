
// 7. Write a program to check if a given number is a palindrome (e.g., 121 ) using a for loop.

var  ans = 0
var n = 121;
for(i=0;i<=n;i++){
    var rem = n % 10;
    ans = ans *10+rem;
    n = n/10;
    console.log(ans*10)
}
