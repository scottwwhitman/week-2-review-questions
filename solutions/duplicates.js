function hasDupes(arr){
  // Your code goes here //
  var sorted_arr = arr.slice().sort();
  var results = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

console.log(hasDupes([1,2,3,4]))
console.log(hasDupes([12,2,1,3,4,5,5]))
