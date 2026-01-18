const utils = require("./stringUtils");

const text = "NodeJS";

console.log("Capital:", utils.capitalize(text));
console.log("Reverse:", utils.reverseString(text));
console.log("Vowels:", utils.countVowels(text));
