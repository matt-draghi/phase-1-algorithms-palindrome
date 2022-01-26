function isPalindrome(word) {
  // Write your algorithm here
  const stringArr = []
  const revStringArr = []
  for(const char in word){
    stringArr.push(word[char])
    revStringArr.unshift(word[char])
  }
  
  return (stringArr.join() === revStringArr.join())
  
}

/* 
  Add your pseudocode here
  - write function isPalindrome that will receive a string argument
  - the function should return true if the string reads the same forwards and backwards
*/

/*
  Add written explanation of your solution here
  - the function should create a new array that takes each letter from the string
  - create a new array using the contents of the current array
  - join the arrays to see if they match
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
