

function filterByLength(arr, maxLength) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
     var element = arr[i];
      // Check if element is a string using typeof operator
      if (typeof element === "string" && element.length <= maxLength) {
        filteredArr.push(element);}
    }
    return filteredArr;}
  // Example usage
  var myArray = ["apple", "banana", "longword", "cherry"];
  var filteredArray = filterByLength(myArray, 6);
  console.log(filteredArray); // Output: ["apple", "banana", "cherry"]