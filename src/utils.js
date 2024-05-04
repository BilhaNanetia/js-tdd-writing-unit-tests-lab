 export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input a string");

    }
    
    if (word === "") {
      return false; 

    }
    
    if (!word.match(/^[A-Za-z]+$/)) {
      throw new Error("Input alphabetic characters");

    }
    

    const cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');  // convert word to lowercase and remove non-alphabetic characters
    
    const reversedCleanedWord = cleanedWord.split('').reverse().join('');   // Reverse the cleaned word

    return cleanedWord === reversedCleanedWord;   // Check if the cleaned word is equal to its reversed word

  }