
// write a programto check stringis pellindrom in javascript


var str = "abcba";
var i = str.length-1;
var reverse = "";
while(i>=0){
    reverse = reverse + str[i];
    i--;
}
if(reverse == str){
    console.log("it is palindrome")
}
else{
    console.log("it is not a palindrome")
}