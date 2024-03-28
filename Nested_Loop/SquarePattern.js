
var rows = 5;
var pattern = "";
for (var n = 1; n <= rows; n++) {
  
   for (var num = 1; num <= 5; num++) {
      pattern += "*";
   }
   pattern =pattern+ "\n";
}
console.log(pattern);