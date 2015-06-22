/*
  Purpose: A bubble sort implementation in JS
  Author: D Schiele
  Date: 6/21/2015
*/
function bubble (arr) {
  var temp, i, swapped;
  do {
    swapped = false;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped)
}

/*
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

bubble(a);
console.log(a);


*/