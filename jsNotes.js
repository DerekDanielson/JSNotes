// Concatenating Strings with Plus Equals Operator
/* Can use to concatenate a string onto the end of an existing string variable.  **Can be helpful to break a long string over several lines. */

let ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."



// Constructing String with Variables
/* By using the concatenation operator(+), can insert one or more variables into a string. */

const ourName = "Bob";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is "Hello, our name is Bob, how are you?."



// Appending Variables to Strings
/* Can also append variables to a string using the plus equals(+=) operator */

const anAdjective = "awesome";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr would be "freeCodeCamp is awesome"



// Find the length of a String
let lastNameLength = 0;
const lastName = "Scooby";
lastNameLength = lastName.length;
// 6



// Bracket Notation to find the first character in a string
/* Bracket notation is a way to get a character at a specific index within a string.
Zero-based indexing - Starts at 0 */

const firstName = "Charles";
const firstLetter = firstName[0];
// "C"



// Understand String Immutability
// String Values are "immutable" - cannot be altered once created
let myStr = "Bob";
myStr = "Job";
// myStr is now "Job"



//Use Bracket Notation to find the Nth character in a string
const firstName = "Scooby";
const secondLetterOfFirstName = firstName[1];
// c



// Use Bracket Notation to find the last character in a string
// Get last letter of a string, can subtract one from the strings length 
const firstName = "Scooby";
const lastLetter = firstName[firstName.length - 1];
// lastLetter is y



//






































































