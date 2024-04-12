
// Write a program to remove duplicate elements from an array without using
// built-in methods.
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [1, 3, 5, 6, 7, 8];

var result = [];
var isDuplicate;

for (var i = 0; i < arr1.length; i++) {
  isDuplicate = false;
  for (var j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j] && !isDuplicate) {
      // Check if the element is already in the result to avoid duplicates within arr1
      for (var k = 0; k < result.length; k++) {
        if (arr1[i] === result[k]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        result.push(arr1[i]);
      }
    }
  }
}

console.log("Duplicate elements:", result);