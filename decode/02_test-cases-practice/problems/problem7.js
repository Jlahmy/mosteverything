var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["foo", 3],
    ["fo", 3],
    ["foo", -1],
    [undefined, false],
    ["ble", 4],
    [true, 0],
    ['wikiwiki', 2]

]

let outputs = [
  'foofoofoo',
  'fofofo',
  "",
  undefined,
  'bleblebleble',
  "",
  'wikiwikiwikiwiki'


]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    console.log(typeof arr[0], arr[0], typeof arr[1], arr[1])

    let newfloo = ""

    if (typeof arr[0] !== 'string' && typeof arr[1] !== 'number') {
        console.log(arr.length)
            return undefined;

    } else if(arr.length > arr[1]){
        console.log(arr.length)
            return ""

    } else if(typeof arr[0] === 'string' && typeof arr[1] === 'number') {
        console.log(arr[0])

        for(let i = 0; i < arr[1]; i++) {
            console.log(i)
                newfloo += arr[0];
           console.log(newfloo)
        } return newfloo

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
runTest(5);
runTest(6);

