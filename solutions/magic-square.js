function addElements(a, b, c){
  return(a + b + c);
}

function isMagic(arr){
  var magic = true;
  var testArray = [];
  testArray.push(addElements(arr[0][0], arr[0][1], arr[0][2]));
  testArray.push(addElements(arr[1][0], arr[1][1], arr[1][2]));
  testArray.push(addElements(arr[2][0], arr[2][1], arr[2][2]));
  testArray.push(addElements(arr[0][0], arr[1][0], arr[2][0]));
  testArray.push(addElements(arr[0][1], arr[1][1], arr[2][1]));
  testArray.push(addElements(arr[0][2], arr[1][2], arr[2][2]));
  testArray.push(addElements(arr[0][2], arr[1][1], arr[2][0]));
  testArray.push(addElements(arr[0][0], arr[1][1], arr[2][2]));
  console.log(testArray);
  for(var i = 1; i < 8; i++){
    if (testArray[i] !== testArray[0]){
      magic = false;
    }
  }
  return magic;
}


//// Tests ////

console.log(isMagic([[1,2,3], [4,5,6], [7,8,9]]))
console.log(isMagic([[2,7,6], [9,5,1], [4,3,8]]))
