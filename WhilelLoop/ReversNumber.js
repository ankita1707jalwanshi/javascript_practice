// 7. Write a JavaScript program to reverse a given number.

var num = 12345;
var rev = 0;


while(num >rev){
    var rem = num %10;
    rev = rev * 10 + rem;
    num = num/10
    
}
console.log(rev)