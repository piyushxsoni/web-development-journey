// String

const str1 = "Piyush";
const str2 = 'Piyush soni';
const day = 18;
const str3 = `strik is comming on ${day}`;
console.log(str1,str2,str3);
  
const str = `Hello Coders`;

console.log(str.length);
console.log(str[1]);

// // Upper case and Lower Case
console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str); 

// Finding string
let str = `Hello coders are You ready for coding ?`;
console.log(str.indexOf('llo'));
console.log(str.lastIndexOf('cod'));
console.log(str.includes('ers'));

// // slice
console.log(str.slice(3,27));


// // Replacing string
let greeting = `hello world, hello there`;

// // Replace only the first hello
console.log(greeting.replace('hello', 'hi'));

// // Replace all hello's
console.log(greeting.replaceAll('hello', 'hey'));

// // Cleaning up Whitespace

let userInput = "   piysuh    ";
console.log(userInput.trim()); 

console.log(userInput.trimStart());
console.log(userInput.trimEnd());

// // Splitting a String into an  array

let csvData = "Item1,item2,item3";
console.log(csvData.split(","));

let words = "The quick brown fox";
let word_array = words.split(" ");
console.log(word_array); 


// // Template Literals(ES6)

let name = "Alice";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
// // You can even put expressions inside:
let futureMessage = `Next year, I will be ${age + 1}.`;

// Date

const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());

console.log(now.getDay())
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getSeconds());


