var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    'a strIng',
    'another',
    'redwood',
    'cluster bubble',
    'SAMMICH'
  
]

let outputs = [
  'A String',
  'Another',
  'Redwood',
  'Cluster Bubble',
  'Sammich'
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    console.log(str)

    let splitStr = str.toLowerCase().split(" ");
    console.log(splitStr.length)

    for(let i = 0; i < splitStr.length; i++) {
        console.log(splitStr[i])

        let letters = splitStr[i].split('');
        console.log(splitStr[i])
        
        letters[0] = letters[0].toUpperCase();
        letters = letters.join('');

        splitStr[i] = letters
        console.log(letters)
        console.log(splitStr)
    }
    str = splitStr.join(' ')
    return str
    
}

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

