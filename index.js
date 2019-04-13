//Flip every pair of characters in a string.


//Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(input){
  //create variable to hold output results
  var output = '';
  //create loop to flip each pair of characters
  //update output result with the flipped characters
  for(var i = 0; i < input.length; i += 2){
    if(input[i+1] === undefined){
      output += input[i];
    } else {
      output += flipChars(input[i], input[i+1]);
    }
  }
  return output;
}

function flipChars(letter1, letter2) {
  return letter2 + letter1;
}

function testPairsAreFlipped(input, expected){
  var inputTest = flipPairs(input);
  var expectedTest = expected;
  assertEqual(inputTest, expectedTest,'it should flip the pair of characters provided');
}

function testCharsAreFlipped(letter1, letter2, expected){
  var inputTest = flipChars(letter1, letter2);
  var expectedTest = expected;
  assertEqual(inputTest, expectedTest,'it should flip the char of input provided');
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('passed[' + testName + ']');
  } else {
    console.log('failed [' + testName + '] expected: ' + expected + ', but actual: ' + actual);
  }
}

testCharsAreFlipped('t','e', 'et');
testPairsAreFlipped('test','etts');
