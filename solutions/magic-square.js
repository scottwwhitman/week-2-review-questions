function isMagic(arr){
// Your code goes here //

for(var i = 0; i < arr.length; i++)
  magic = arr[i];
  number = 0;
  for(var j = 0; j < magic.length; j++){
    number = number + magic[j]
  }

  if(number == 15){
    return true
  } else {
    return false
  }
  
};

//// Tests ////

console.log(isMagic([[1,2,3], [4,5,6], [7,8,9]]))
console.log(isMagic([[2,7,6], [9,5,1], [4,3,8]]))
