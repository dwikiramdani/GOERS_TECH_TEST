// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function fibonacci(x) {
  var range = x;
  var start = 0;

  var a = 0;
  var b = 1;
  var obj = [];
  var arr = 0;

  var temp = 1;

  while (start < range) {
    temp = a + b;
    a = b;
    b = temp;
    if (temp % 2 === 0) {
      obj[arr] = temp;
      arr = arr + 1;
    }

    start = start + 1;
  }
  console.log(range);
  console.log(obj);
}

console.log(fibonacci(20));
