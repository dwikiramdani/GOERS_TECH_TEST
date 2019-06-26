// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function soal(x) {
  var range = x;
  var start = 0;

  var factorial = x;
  var diff = factorial - 1;

  var numberArr = [];

  while (start < range) {
    if (diff > 0) {
      factorial = factorial * diff;
    }
    start = start + 1;
    diff = diff - 1;
    var sNumber = factorial.toString();
  }

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    numberArr.push(+sNumber.charAt(i));
  }

  for (var n = 0, sum = 0; n < numberArr.length; sum += numberArr[n++]);

  console.log(sNumber);
  console.log(numberArr);

  console.log(sum);
}

console.log(soal(12));
