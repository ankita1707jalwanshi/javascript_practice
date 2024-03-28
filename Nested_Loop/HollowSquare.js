
var rows = 5;
var pattern = "";
for (var n = 1; n <= rows; n++) {
   for (var num = 1; num <= 5; num++) {
      
      if (n == 1 || n == rows) pattern += "*";
      else {
         if (num == 1 || num == 5) {
            pattern += "*";
         } else {
            pattern += " ";
         }
      }
   }
   pattern += "\n";
}
console.log(pattern);