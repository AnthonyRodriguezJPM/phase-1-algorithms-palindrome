function isPalindrome(word) {
  // Write your algorithm here
  const word1=`${word}`;
  // .split() is desctructive
  const arrayLetters = word1.split('');
  const copyArrayLetters = [...arrayLetters]
  const reverseArray = copyArrayLetters.reverse();
  console.log(arrayLetters);
  console.log(reverseArray);

// Use JSON.stringify() to compare arrays
if (JSON.stringify(arrayLetters)===JSON.stringify(reverseArray)){
      return true
} 
else {
  return false
}
}


isPalindrome('abba');

/* 
  Add your pseudocode here

// function isPalindrome {
  turn word into an array of letters

if array of letters equal to the array of letters but backwords 
    return true with word
    else 
    return false 'sorry, not a Palindrome word'
}
*/

/*
  Add written explanation of your solution here

  Make a function that if string input returns an output that matches the same word but backwords, return true if the word is a Palindrome.

  Split each word into an array of letters, then if array is equal to array backwords then make the solution true. Use prototype.split('').
  
  Use reverse() method to reverse array

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
