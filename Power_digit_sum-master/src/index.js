// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function soal(angka, kuadrat) {
  var range = kuadrat;
  var start = angka;
  var value = angka;
  var arr1 = [];

  for (var n = 1; n < range; n++) {
    start = start * angka;
    value = start;
  }
  var sNumber = value.toString();
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    arr1.push(+sNumber.charAt(i));
  }

  for (var a = 0, sum = 0; a < arr1.length; sum += arr1[a++]);

  console.log(arr1);
  console.log(value);
  console.log(sum);
}

console.log(soal(2, 10));
