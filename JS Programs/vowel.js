// program to count the number of vowels in a string

const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // return number of vowels
  return count;
}
