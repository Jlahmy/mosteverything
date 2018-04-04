

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}

reverseString(duplicateString(duplicateString("foo")))

let newDuplicatedString = duplicateString("foo") //concatenating a 'foo' with itself = "foofoo"
let newDuplicatedString2 = duplicateString (newDuplicatedString)//another round concating (yeah, new word, deal wifit) = "foofoofoofoo"

console.log(newDuplicatedString2)

let swagReversedString = reverseString(newDuplicatedString2) //reversing quad foo = "oofoofoofoof"
console.log(swagReversedString)