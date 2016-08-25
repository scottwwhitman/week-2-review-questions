function isPalindrome(str){
// Your code goes here //
  return str == str.split('').reverse().join('');
};


//// Tests ////

console.log(isPalindrome('hello'));
console.log(isPalindrome('hannah'));
