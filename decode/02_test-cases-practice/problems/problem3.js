var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ['22', '33'],
  [false, true],
  [5, 09],
  [undefined, 73],
  [55, 100]
]

let outputs = [
  6,
  0,
  undefined,
  undefined,
  14,
  undefined,
  155

]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, 
or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
  console.log("before operation", x[0], x[1])
    if(typeof x[0] === 'number' & typeof x[1] === 'number') {
      return x[0] + x[1];
    } else {
      return undefined;
    }
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
