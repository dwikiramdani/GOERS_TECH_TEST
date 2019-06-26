// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function fibonacci(x) {
  var range = x;

  var obj = [];
  var arr = 0;

  var temp = 0;

  for (var n = 1; n <= range; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      obj[arr] = temp;
      temp = n;
      arr = arr + 1;
    }
  }

  console.log(range);
  console.log(obj);
}

console.log(fibonacci(20));
