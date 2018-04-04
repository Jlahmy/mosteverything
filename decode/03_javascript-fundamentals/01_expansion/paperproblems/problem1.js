function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
square(decrement(square(decrement(3))))
  /*   
let decrementedValue = 3 - 1;
let squaredValue = decrementedValue * decrementedValue;
let newDecrementedValue = squaredValue - 1;
let newSquaredValue = newDecrementedValue * newDecrementedValue
console.log(newSquaredValue)
*/

// #2
decrement(decrement(square(square(3))))
/*
let squaredValue = 3 * 3;
let newSquaredValue = squaredValue * squaredValue;
let decrementedValue = newSquaredValue - 1;
let newDecrementedValue = decrementedValue - 1;
console.log(newDecrementedValue)
*/

// #3
duplicateString(reverseString("hello"))
/*
let reversedString = reverseString("hello") //prints out olleh as a joined string
let duplicatedReversedString = "olleh".concat('olleh') //takes the product of reversedString "olleh" (param x) 
                                                        //and adds another "olleh" (another x)
console.log(duplicatedReversedString)
*/



// #4
reverseString(duplicateString(duplicateString("foo")))
/*
let newDuplicatedString = duplicateString("foo") //concatenating a 'foo' with itself = "foofoo"
let newDuplicatedString2 = duplicateString (newDuplicatedString)//another round concating (yeah, new word, deal wifit) = "foofoofoofoo"

console.log(newDuplicatedString2)

let swagReversedString = reverseString(newDuplicatedString2) //reversing quad foo = "oofoofoofoof"
console.log(swagReversedString)
*/
