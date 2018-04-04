var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  ['3', 4],
  ['word', 4],
  [undefined, undefined],
  [true, '4']
]

let outputs = [
  14,
  undefined,
  undefined,
  undefined,
  undefined
]

/*
Make this function return the product of the two numbers that are passed to it. 
If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(x, y) {
    console.log(x[0], x[1])
    console.log(typeof(x[0] * x[1]))
    if(typeof x[0] === 'number' && typeof x[1] === 'number') {
        return x[0] * x[1]
    } else {
      return undefined;
  } 
};

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
