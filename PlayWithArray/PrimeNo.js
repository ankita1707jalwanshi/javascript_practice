
function isPrime(num) {
    if (num <= 1) return false; // 1 and less than 1 are not prime
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false; // Divisible by another number, not prime
    }
    return true; // If no divisors found, prime
  }
  
  function filterPrimes(arr) {
    var primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (isPrime(num)) {
        primeNumbers.push(num);
      }
    }
    return primeNumbers;
  }
  
  // Example usage
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
  var primeNumbers = filterPrimes(numbers);
  console.log(primeNumbers); // Output: [2, 3, 5, 7, 11]