

function findMinMax(arr) {
    // Handle empty array case
    if (arr.length === 0) {
      return { smallest: null, largest: null };
    }
  
    // Initialize min and max with the first element
    let smallest = arr[0];
    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      var element = arr[i];
      // Update min and max if necessary
      smallest = element < smallest ? element : smallest;
      largest = element > largest ? element : largest;
    }
  
    return { smallest, largest };
  }
  
  // Example usage
  var numbers = [45, 4, 9, 16, 25, 100, 43];
  var { smallest, largest } = findMinMax(numbers);
  console.log("Smallest element:", smallest);
  console.log("Largest element:", largest);