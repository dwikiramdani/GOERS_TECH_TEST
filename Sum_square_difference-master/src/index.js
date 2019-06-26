// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function soal(x) {
  var range = x;
  var start = 0;

  var a = 1;
  var arr1 = [];
  var arr2 = [];
  var sumSquare = 0;
  var sumArray = 0;
  var arraySquare = 0;

  while (start < range) {
    var square = a * a;
    arr1[start] = square;
    sumSquare = sumSquare + square;

    arr2[start] = a;
    sumArray = sumArray + a;
    arraySquare = sumArray * sumArray;
    a = a + 1;
    start = start + 1;
  }
  var diffSquare = arraySquare - sumSquare;

  console.log("Angka dasar");
  console.log(arr2);
  console.log("Angka kuadrat");
  console.log(sumArray);
  console.log("Angka array");
  console.log(arr1);
  console.log("Sum array Kuadrat");
  console.log(arraySquare);
  console.log("Sum kuadrat");
  console.log(sumSquare);
  console.log("Selisih");
  console.log(diffSquare);
}

console.log(soal(10));
