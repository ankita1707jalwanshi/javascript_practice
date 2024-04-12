

var arr1 =[1,2,3,4,5,6]
var arr2 = [2,4,6,8]

// New array to store intersection
var intersection = [];

// Loop through the first array
for (var i = 0; i < arr1.length; i++) {
    // Check if the current element in array1 exists in array2
    if (arr2.includes(arr1[i])) {
        // If it does, add it to the intersection array
        intersection.push(arr1[i]);
    }
}

// Print the intersection array
console.log("Intersection of the two arrays:", intersection);