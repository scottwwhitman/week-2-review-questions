function chooseTwo(arr) {
  // Your code goes here //
  var pairs = [];
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j < arr.length - 1; j++) {
          temp = ([arr[i], arr[j+1]]);
          pairs.push(temp)
        }
    }
  return pairs;
};

//// Tests ////
console.log(chooseTwo([1,2,3,4,5]))
console.log(chooseTwo(['a','b','c','d']))
