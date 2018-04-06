var assert = require('assert');

// we need 5 test cases. 
let inputs = [

    [[22,33], [22,33,44]],
    [[1,2,3], [0,1,2]],
    [[1,2,3], [1,2,3]],
    [[2],[3]],
    [['bob','jerry'], ['jerry','carmen']],

]

let outputs = [
  [44],
  [3,0],
  [],
  undefined,
  ['bob','carmen'],
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr1, arr2) {
    let finalArray = [] 

    for(let i = 0; i < arr1.length; i++) {

        let array1 = arr1[i];
        let finalArray = []; 
        let match = false;

        console.log("array1 = ", array1)

        for(let i = 0; i < arr2.length; i++){
            console.log("array1 2nd loop = ", array1)
            if(array1 !== arr2[i]) {
                match = true
            };
            if(match) {
                finalArray += array1     
            }
        }
    }
    console.log(finalArray)
};

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

 runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

