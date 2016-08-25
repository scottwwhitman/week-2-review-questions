function factorial(n){
  // Your code goes here //
  if (n < 0) {
    return -1;
  }
  else if (n == 0) {
    return 1;
  }
  else {
    return (n * factorial(n - 1));
  }
}

//// Tests ////
console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))
console.log(factorial(2))
console.log(factorial(1))
console.log(factorial(0))
