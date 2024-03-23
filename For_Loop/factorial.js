
// 5. Write a program to calculate the factorial of a given number (e.g., 5) using a
// for loop.

function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  }
  