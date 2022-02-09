/*var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + ' String';

console.log(a);
console.log(b);
console.log(c);*/

/*var sum = 10 % 10;
console.log(sum);*/  //100

/*var myVar = 11;
myVar--;
console.log(myVar);*/ //10 

/*var remainder;
remainder = 11 % 3;
console.log(remainder);*/ //The remainder is 2

/*var a = 11;
var b = 9;

a += 6; //instead of a = a + 6;
b -= 15;*/ //instead of b = b - 15;

/* CONCATE TWO STRINGS
var myStr = "This is start, " + "This is end";
console.log(myStr);*/ //"This is start, This is end"
//Also can you use 
/*var myStr = "Blah blah blah";
myStr += "Blah blah";
console.log(myStr);*/

/*var name = "Dog";
var str = "Hello " + name + ", how are you?";
console.log(str);*/
//OR
/*var name = "Dog";
var str = "Hello ";
str += name;
console.log(str);*/

//FIND LENGTH OF STRING
/*var firstNameLength = 0;
var firstName = 'Derek';

firstNameLength = firstName.length;
console.log(firstNameLength);*/

//FIND CHARACTER IN STRING
/*var firstLetter = '';
var firstName = 'Derek';

firstLetter = firstName[0];
console.log(firstLetter);*/ //"D"

//FIND LAST CHARACTER IN STRING
/*var firstName = "Derek";
var lastLetter = firstName[firstName.length - 1];

console.log(lastLetter);*/ //"k"

//Array
//var ourArray = ['John', 23];

//ACCESS ARRAY DATA WITH INDEXES
/*var myArray = [50,60,70];
var myData = myArray[1];
console.log(myData);*/ //60

//MODIFY ARRAY DATA WITH INDEXES
/*var myArray = [18,64,99];
myArray[0] = 'the numbers are';
console.log(myArray);*/ //['the numbers are', 64, 99]

//ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
/*var myData = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var data = myData[3][2];
console.log(data);*/ //14

//MANIPULATE ARRAYS WITH PUSH()
/*var myArray = [['John', 23], ['cat', 2]];
myArray.push(['Happy', 3], 'Dog');
console.log(myArray);*/ //[['John', 23], ['cat', 2], ['Happy', 3], 'Dog']

//MANIPULATE ARRAY WITH POP()
/*var ourArray = [1,2,3];
var removedArray = ourArray.pop();
console.log(removedArray); // 3
console.log(ourArray);*/ //[1,2]

//MANIPULATE ARRAY WITH SHIFT()
/*var ourArray = ['Simpson', 'J', ['Dog']];
var removedArray = ourArray.shift();
console.log(removedArray); // 'Simpson'
console.log(ourArray);*/ //['J', ['Dog']]

//MANIPULATE ARRAY WITH UNSHIFT()
/*var myArray = ['Simpson', 'J'];
myArray.shift();               //Removes beginning
myArray.unshift('Happy');      //Adds to beginning
console.log(myArray);*/ //["Happy", "J"]

//PASSING ARGUMENT THROUGH FUNCTION
/*function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 30);*/ //40
